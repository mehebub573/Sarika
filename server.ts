import express from 'express';
import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_DIR = path.resolve(process.cwd(), 'data');
const RSVP_FILE = path.join(DATA_DIR, 'rsvps.json');

export interface RsvpRecord {
  id: string;
  name: string;
  contact: string;
  attending: 'yes' | 'no';
  guestsCount: number;
  events: Array<'holud' | 'biye' | 'boubhat'>;
  message: string;
  createdAt: string;
}

function ensureStorage(): void {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, {recursive: true});
  }
  if (!fs.existsSync(RSVP_FILE)) {
    fs.writeFileSync(RSVP_FILE, JSON.stringify([], null, 2), 'utf-8');
  }
}

function readRsvps(): RsvpRecord[] {
  ensureStorage();
  try {
    const raw = fs.readFileSync(RSVP_FILE, 'utf-8');
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeRsvps(records: RsvpRecord[]): void {
  ensureStorage();
  fs.writeFileSync(RSVP_FILE, JSON.stringify(records, null, 2), 'utf-8');
}

async function startServer() {
  const app = express();
  app.use(express.json({limit: '1mb'}));

  app.get('/api/health', (_req, res) => {
    res.json({ok: true});
  });

  app.get('/api/rsvp', (_req, res) => {
    const records = readRsvps();
    const confirmedRecords = records.filter((r) => r.attending === 'yes');
    const confirmedGuests = confirmedRecords.reduce((sum, r) => sum + (Number(r.guestsCount) || 1), 0);

    // Return sanitized public fields (omit private contact info)
    const publicWishes = records.slice(0, 50).map((r) => ({
      id: r.id,
      name: r.name,
      attending: r.attending,
      guestsCount: r.guestsCount,
      events: r.events,
      message: r.message,
      createdAt: r.createdAt,
    }));

    res.json({
      totalResponses: records.length,
      confirmedResponses: confirmedRecords.length,
      confirmedGuests,
      wishes: publicWishes,
    });
  });

  app.post('/api/rsvp', (req, res) => {
    const body = req.body ?? {};
    const name = typeof body.name === 'string' ? body.name.trim() : '';
    const contact = typeof body.contact === 'string' ? body.contact.trim() : '';
    const attending = body.attending === 'no' ? 'no' : 'yes';
    const guestsCountRaw = Number(body.guestsCount);
    const guestsCount = attending === 'no' ? 0 : Math.min(8, Math.max(1, Number.isFinite(guestsCountRaw) ? Math.round(guestsCountRaw) : 1));
    const allowedEvents = new Set(['holud', 'biye', 'boubhat']);
    const events: Array<'holud' | 'biye' | 'boubhat'> = Array.isArray(body.events)
      ? body.events.filter((e: unknown): e is 'holud' | 'biye' | 'boubhat' => typeof e === 'string' && allowedEvents.has(e))
      : [];
    const message = typeof body.message === 'string' ? body.message.trim().slice(0, 400) : '';

    if (name.length < 2) {
      res.status(400).json({error: 'অনুগ্রহ করে আপনার পূর্ণ নাম লিখুন।'});
      return;
    }
    if (contact.length < 5) {
      res.status(400).json({error: 'অনুগ্রহ করে সঠিক মোবাইল নম্বর বা ইমেইল দিন।'});
      return;
    }
    if (attending === 'yes' && events.length === 0) {
      res.status(400).json({error: 'অনুগ্রহ করে অন্তত একটি অনুষ্ঠান নির্বাচন করুন।'});
      return;
    }

    const newRecord: RsvpRecord = {
      id: `rsvp_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
      name: name.slice(0, 80),
      contact: contact.slice(0, 120),
      attending,
      guestsCount,
      events: attending === 'yes' ? events : [],
      message,
      createdAt: new Date().toISOString(),
    };

    const existing = readRsvps();
    existing.unshift(newRecord);
    writeRsvps(existing);

    res.status(201).json({
      success: true,
      record: {
        id: newRecord.id,
        name: newRecord.name,
        attending: newRecord.attending,
        guestsCount: newRecord.guestsCount,
        events: newRecord.events,
        message: newRecord.message,
        createdAt: newRecord.createdAt,
      },
    });
  });

  if (process.env.NODE_ENV !== 'production') {
    const {createServer: createViteServer} = await import('vite');
    const vite = await createViteServer({
      server: {middlewareMode: true},
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distDir = path.resolve(__dirname, 'dist');
    app.use(express.static(distDir));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distDir, 'index.html'));
    });
  }

  const port = Number(process.env.PORT) || 3000;
  app.listen(port, '0.0.0.0', () => {
    console.log(`Wedding invitation server running on http://0.0.0.0:${port}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
