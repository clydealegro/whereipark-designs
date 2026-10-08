# WhereiPark landing page prototypes

Coded prototypes of WhereiPark group parking landing pages, built from the Figma file "Construction Landing Page" for client review before the Webflow build.

| Page | Path | Figma |
|---|---|---|
| Car Rental & Fleets | `/car-rental/` | [Desktop 1441:596](https://www.figma.com/design/IEHm1TuXfSn1DT8Un9OhUD/Construction-Landing-Page?node-id=1441-596) |

## Stack
Static HTML, CSS, and vanilla JS. No build step. Class names follow Client-First (`section_`, `padding-global`, `container-large`) so the markup maps cleanly to Webflow.

## Preview locally
```bash
python3 -m http.server 8080
```
Then open http://localhost:8080/car-rental/

## Deploy
The repo is connected to Vercel, and every push to `main` deploys to production. `vercel.json` adds a `noindex` header so the review URLs stay out of search.

## Notes
- The HubSpot form is the production embed (portal 22317901). Test submissions create real leads.
- The hero and "Parking Problem" photos are stand-ins until real fleet photography arrives.
