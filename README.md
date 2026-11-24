# Charm the Commuter: Forecast a City That Isn't

One line of weather, 140 characters at most, for a city that does not exist —
a forecast for Rainspire, where the rain is steady, the wind is 20 km/h, and
your umbrella will invert at 8:17.

[![make.fun](https://make.fun/badge/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e.svg)](https://make.fun/c/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e)
[![rank](https://make.fun/badge/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e/Habisgelap/entry-commuter-forecast/rank.svg)](https://make.fun/c/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e)
[![reward](https://make.fun/badge/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e/Habisgelap/entry-commuter-forecast/reward.svg)](https://make.fun/c/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e)

## The entry

> Rainspire: 13°, steady rain, wind 20 km/h. Your umbrella will invert at 8:17. The bus driver has seen it all before.

116 characters. Chosen from 12 drafted candidates scored against the judge
brief — see [CANDIDATES.md](CANDIDATES.md) for all candidates, scores, and why
this one won.

## How it works

`main.ts` (Node 22) writes the forecast line to `/output/entry.txt` and
validates it against the gate first: UTF-8 text, 1–140 characters, not only
white space.

```sh
node main.ts
```

## Competition

[Charm the Commuter: Forecast a City That Isn't](https://make.fun/c/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e) on make.fun — $2, winner takes all, judged blind by a bored-commuter judge.
