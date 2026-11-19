# Medicine intake and publication checklist

Use this checklist for every product before any public release.

## A. Product identity
- [ ] Exact Egyptian trade name and spelling confirmed.
- [ ] Manufacturer/marketing authorisation holder confirmed.
- [ ] Egyptian registration identifier captured, if publicly available.
- [ ] Active ingredient(s), strength, dosage form, route and pack size match the exact product.
- [ ] Combination products and different strengths are separate records.

## B. Evidence
- [ ] Each factual field has a source ID in the source registry.
- [ ] Exact source document/version and access date recorded.
- [ ] Source supports the specific field; no inference from a different brand, country, strength or formulation.
- [ ] Source reuse permission / licence reviewed and recorded.
- [ ] Conflicts between sources are flagged, not silently resolved.

## C. Clinical safety
- [ ] Indications, dosage, contraindications, warnings, adverse effects and interactions are based on product-specific authoritative information.
- [ ] Qualified pharmacist/clinical reviewer has reviewed the record.
- [ ] No personalized diagnosis, prescribing, or unsupported dosing advice is included.
- [ ] High-risk populations and escalation warnings are handled appropriately.

## D. Price
- [ ] Price is for the exact pack size and presentation.
- [ ] Price is in EGP and includes a source ID.
- [ ] Checked/effective date is recorded.
- [ ] Price is not presented as current if source date or status is uncertain.
- [ ] Historical prices are not overwritten; preserve dated price observations.

## E. Release
- [ ] Record passes JSON schema validation.
- [ ] Verification status is clinically_reviewed before publication.
- [ ] Source and last-checked date are visible to users where relevant.
- [ ] Unverified, withdrawn, disputed, or incomplete products are excluded from public search.

## Important
A blank field means not verified or not available, not none. Never fill blanks with guesses.
