// Run with: node tests/smoke-check.js
const fs = require('fs');
const vm = require('vm');
const assert = require('assert');

const pages = [
  'index.html',
  'diseases.html',
  'first-aid.html',
  'assistant.html',
  'library.html',
  'health-tips.html',
  'pharmacies.html',
  'professionals.html'
];

for (const page of pages) {
  const html = fs.readFileSync(page, 'utf8');
  assert.match(html, /<!doctype html>/i, page + ': missing doctype');
  assert.match(html, /<html[^>]*lang="ar"[^>]*dir="rtl"/i, page + ': Arabic RTL required');
  assert.match(html, /<meta name="viewport"/i, page + ': responsive viewport required');

  const scripts = [...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)];
  for (const match of scripts) {
    if (match[1].trim()) new vm.Script(match[1], { filename: page });
  }

  const localLinks = [...html.matchAll(/(?:href|src)="([^"]+)"/g)]
    .map(match => match[1])
    .filter(value => !/^(?:https?:|mailto:|tel:|#|data:|javascript:)/i.test(value));
  for (const link of localLinks) {
    const clean = link.split(/[?#]/)[0];
    if (clean) assert.ok(fs.existsSync(clean), page + ': missing local asset ' + clean);
  }
}

const medicine = JSON.parse(fs.readFileSync('data/medicines/catalog.json', 'utf8'));
const pharmacies = JSON.parse(fs.readFileSync('data/pharmacies/catalog.json', 'utf8'));
JSON.parse(fs.readFileSync('data/medicine.schema.json', 'utf8'));
JSON.parse(fs.readFileSync('data/PHARMACY_SCHEMA.json', 'utf8'));
assert.strictEqual(medicine.records_count, medicine.records.length, 'medicine record count mismatch');
assert.strictEqual(pharmacies.records_count, pharmacies.records.length, 'pharmacy record count mismatch');
assert.ok(pharmacies.records.every(record => record.verification === 'verified'), 'unverified pharmacy in public catalogue');

console.log('Saydalety smoke checks passed for ' + pages.length + ' pages and both JSON catalogues.');
