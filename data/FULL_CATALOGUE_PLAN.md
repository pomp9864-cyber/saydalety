# Full Egypt medicine catalogue — execution plan

## Target
Build the broadest reliable searchable catalogue of human medicines actually marketed or officially registered in Egypt, including local and imported products, prescription and OTC medicines, branded and generic products, and every distinct strength/form/pack presentation.

This is a catalogue target, not a claim that the current repository already contains all products.

## Workstreams
1. Regulatory master list: identify and obtain an authoritative Egyptian product register or official public search/export from the Egyptian Drug Authority (EDA). Confirm coverage, fields, update cadence, access method and permitted reuse.
2. Product identity: ingest exact marketed product records; preserve source identifiers and original Arabic/English names.
3. Clinical information: attach product-specific approved leaflets or authoritative product information. Do not infer dosing or indications from another strength, country or formulation.
4. Price history: collect only traceable Egyptian retail/official price evidence; store each observation with pack size, source and date. Never overwrite history or claim freshness without a current check.
5. Normalization: normalize ingredient names, transliterations, manufacturers, dosage forms and common aliases while retaining original source values.
6. Quality control: schema validation, duplicate detection, source audit, pharmacist review, and exclusion of unresolved/conflicting records.
7. Public search: expose only records that pass publication checks; show source and last-verified date.

## Product coverage rules
- Human medicines only in this catalogue. Veterinary products, devices, cosmetics and supplements are separate scopes unless an Egyptian authority classifies a product as a medicine.
- Local and imported products are both in scope.
- Prescription and non-prescription medicines are both in scope.
- Each strength, dosage form, route and pack presentation remains distinguishable.
- A shared active ingredient does not make two products identical or automatically interchangeable.

## Current status (2026-11-19)
The repository currently has the data schema, source registry structure, intake template and review checklist. It does not yet contain verified medicine product records. The EDA homepage is recorded as a candidate source only; no live product database, complete downloadable register, API, update frequency or reuse permission has been confirmed here.

## Critical dependency
A genuinely broad and defensible catalogue requires access to the official Egyptian product register and permission to reuse its records, or another authorized comprehensive source. Do not fabricate a product list or scrape/re-publish third-party catalogues without permission. If the official source offers only manual lookup, record that limitation and use an authorized workflow rather than claiming automatic completeness.

## Release gate
No medicine record is publicly searchable until:
- identity and Egyptian market status are supported by a traceable source;
- each clinical claim is sourced to product-specific authoritative information;
- reuse rights are cleared;
- record passes validation and pharmacist review.
