---
title: HTML Lang and Hreflang
description: Technical language declarations that help browsers, screen readers, and search engines serve the right content.
---

These are small technical attributes with large effects. They tell browsers how to render text, screen readers how to pronounce it, and search engines which audience a page is for.

## What to agree first

- What is the primary language and locale of the site?
- Are there sections or pages in other languages?
- Are there alternate regional versions of the same language?

## Minimum baseline

- Every page declares a language on the `<html>` element using a valid IETF tag (for example `en-GB`).
- Inline content in a different language uses a `lang` attribute on the surrounding element.
- Multilingual or multi-regional sites declare `hreflang` links between equivalent pages.
- A default `x-default` is set where appropriate.

## Done when

- Language declarations are correct on every template.
- Cross-language relationships are mapped and implemented.
