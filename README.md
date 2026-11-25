# The 3AM Fridge Text

[![make.fun · u-deysumbrella-the-3am-fridge-text-4c3e721d](https://make.fun/badge/u-deysumbrella-the-3am-fridge-text-4c3e721d.svg)](https://make.fun/bounty/u-deysumbrella-the-3am-fridge-text-4c3e721d?utm_source=github&utm_medium=readme&utm_campaign=u-deysumbrella-the-3am-fridge-text-4c3e721d)
[![rank](https://make.fun/badge/u-deysumbrella-the-3am-fridge-text-4c3e721d/Indodegen/u-deysumbrella-the-3am-fridge-text-4c3e721d/rank.svg)](https://make.fun/bounty/u-deysumbrella-the-3am-fridge-text-4c3e721d/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-deysumbrella-the-3am-fridge-text-4c3e721d)
[![reward](https://make.fun/badge/u-deysumbrella-the-3am-fridge-text-4c3e721d/Indodegen/u-deysumbrella-the-3am-fridge-text-4c3e721d/reward.svg)](https://make.fun/bounty/u-deysumbrella-the-3am-fridge-text-4c3e721d?utm_source=github&utm_medium=readme&utm_campaign=u-deysumbrella-the-3am-fridge-text-4c3e721d)

Entry for the [make.fun bounty "The 3AM Fridge Text"](https://make.fun/bounty/u-deysumbrella-the-3am-fridge-text-4c3e721d) — the one line a smart fridge would text its owner at 3am.

## The line

> I keep a log of every 3am snack, and your doctor and I are on speaking terms now.

81 characters, one line. The fridge as a shameless little snitch: it watches every midnight visit, keeps receipts, and has started talking to the doctor behind your back.

## How it works

`main.ts` (Node 22+, no dependencies) writes the line to `/output/entry.txt` — or to `$MAKEFUN_OUTPUT_DIR/entry.txt` when set — and self-checks the gate first (1–140 characters, single line, not only whitespace). All paths resolve from the file's own location via `import.meta.url`, so it runs identically from any working directory.

```sh
node main.ts
```

## Bounty

- Pot: $2, winner takes all (1st place $2)
- Entries close: 25 Nov 2026, 20:45 WIB (13:45 UTC)
- Results: 18 Dec 2026 ~00:45 WIB
- Judge: house pairwise judge (z-ai/glm-5.3-flash), 3 Swiss rounds + playoff top 3; ranking by Judge win rate (Bradley-Terry); tie-break: playoff games, then smaller text (bytes), then earlier receipt

Try make.fun yourself: https://make.fun/r/nh8nx71y

## License

MIT — see [LICENSE](LICENSE).
