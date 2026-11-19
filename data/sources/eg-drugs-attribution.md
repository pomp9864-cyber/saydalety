# Third-party Egyptian medicine index — attribution and limitations

## Source
- Dataset: Egyptian Drug Database (`eg-drugs`)
- Maintainer named in its README: Mahmoud Mohamed
- Repository: https://github.com/mahmoudfalous/eg-drugs
- Public API documented by the repository: https://eg-drugs-api.mahmoudfalous.workers.dev/
- Dataset licence declared by the repository: Creative Commons Attribution 4.0 International (CC BY 4.0)
- Required attribution: **Egyptian Drug Database (eg-drugs) by Mahmoud Mohamed — https://github.com/mahmoudfalous/eg-drugs**
- Licence text: https://creativecommons.org/licenses/by/4.0/

## What the repository claims
Its README describes 27,617+ medicine records marketed in Egypt and lists Arabic/English names, active ingredients, manufacturers, current/previous prices, barcodes, pack units, categories and Arabic use descriptions. It documents CSV, JSON, SQLite and SQL exports, and a public search API.

These are maintainer-provided claims, not an independent audit or EDA certification.

## Integration status
The Saydalety homepage now calls the documented public search API for live queries. Search results show the source attribution and warn users that the data is third-party and may be stale. The API was not independently health-validated or uptime-tested as part of this code change.

## Clinical and regulatory limitations
- This source is not the Egyptian Drug Authority's official register.
- The repository README itself warns that prices and availability change and should be checked with EDA and a licensed pharmacist.
- Do not use its records alone to recommend treatment, calculate doses, infer contraindications, or assert that a product is currently registered/available.
- Product identity, pack size, active ingredients, and market status require verification against authoritative Egyptian product information before a record can be labelled verified.
- Do not present dataset size as proof of complete coverage of every medicine in Egypt.
- Preserve the CC BY 4.0 attribution and link whenever this dataset is used or adapted.

## Next quality gate
Audit representative records and API responses, check price/date semantics and missing fields, compare with official EDA information, and establish a documented refresh and pharmacist-review process before expanding into clinical product pages.
