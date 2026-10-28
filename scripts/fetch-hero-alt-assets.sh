#!/bin/sh
# Downloads the /alt/ hero assets from Figma (MB UX Assets, node 2023:12997, "Mediabarn alt").
# The Figma asset links expire 7 days after they were generated (2026-10-28).
# If they have expired, regenerate them from that node with the Figma connector.
set -e
P=https://www.figma.com/api/mcp/asset/662b7d2b-6bba-430b-9409-b7dff3db9fae
D=public/images/hero-alt
mkdir -p "$D/vb" "$D/test"
get() { curl -fsSL -o "$D/$2" "$P/$1"; }
get df0ad.png hero-photo.png
get f767a.svg waves-dark.svg
get 5f43c.svg logo-barn.svg
get 53167.svg logo-text.svg
get ed982.svg menu.svg
get 6bbfd.png card-navy-federal.png;  get c36e6.svg logo-navy-federal.svg
get 711ef.png card-usps.png;          get 5309b.svg logo-usps.svg
get a170d.png card-irs.png;           get 38592.svg logo-irs.svg
get 0b26d.png card-sentara.png;       get 62cd2.svg logo-sentara.svg
get 47048.png card-virginia-beach.png
get 8e4f7.png card-test.png
get d1794.png card-nist.png;          get ff231.svg logo-nist.svg
i=0; for h in b4914 4c6cb ba332 dff51 1f730 4f831 80f46 ddd1b 25693 d5e94 07339 23878 582fc 2a8d3 f475c; do get $h.svg vb/v$i.svg; i=$((i+1)); done
i=0; for h in 6f220 fea3a 3031b 1d561 6c37f 74c86 b5f9b c71a2 655bd f6438 74965 49162 88a29 cd36b fc7b6 25e4f bb688 87f1e b1fec af4d2; do get $h.svg test/v$i.svg; i=$((i+1)); done
echo "done: $(find "$D" -type f | wc -l) files"
