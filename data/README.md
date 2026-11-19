# Medicine data policy

This directory contains the data contract for the Egyptian medicine catalogue. It intentionally contains no fabricated medicine records.

## Publication requirements
- Verify product identity, registration status, ingredients, strength, dosage form and pack details against an authoritative Egyptian regulatory source or approved product information.
- Cite a source for every clinical claim. Record which fields each source supports.
- Clinical content must be reviewed by a qualified pharmacist/clinical reviewer before publication.
- Never infer interchangeability from a similar brand name. Keep same-ingredient/same-strength/same-form alternatives distinct from therapeutic alternatives.
- Prices are time-sensitive. Store EGP price, source and timestamp; display the checked date. Do not label a price current without a recent source check.
- Keep withdrawn, unverified or conflicting records out of public search results.
- Do not provide individualized diagnosis or prescriptions.

## Files
- `medicine.schema.json`: required structure and validation rules for each medicine record.

## Source registry (to be populated after source access and permission review)
Each source should have an internal ID, publisher, URL/document reference, jurisdiction, source type, access date, permitted use/licence, and the exact fields it can substantiate.

No medicine records are approved for public display until a source registry and review workflow exist.
