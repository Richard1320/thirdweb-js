import type { AuthOption } from "../../../wallets/types.js";

// TODO make the social icons usable in RN too
const googleIconUri =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3MDUuNiIgaGVpZ2h0PSI3MjAiIHZpZXdCb3g9IjAgMCAxODYuNjkgMTkwLjUiIHhtbG5zOnY9Imh0dHBzOi8vdmVjdGEuaW8vbmFubyI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTE4NC41ODMgNzY1LjE3MSkiPjxwYXRoIGNsaXAtcGF0aD0ibm9uZSIgbWFzaz0ibm9uZSIgZD0iTS0xMDg5LjMzMy02ODcuMjM5djM2Ljg4OGg1MS4yNjJjLTIuMjUxIDExLjg2My05LjAwNiAyMS45MDgtMTkuMTM3IDI4LjY2MmwzMC45MTMgMjMuOTg2YzE4LjAxMS0xNi42MjUgMjguNDAyLTQxLjA0NCAyOC40MDItNzAuMDUyIDAtNi43NTQtLjYwNi0xMy4yNDktMS43MzItMTkuNDgzeiIgZmlsbD0iIzQyODVmNCIvPjxwYXRoIGNsaXAtcGF0aD0ibm9uZSIgbWFzaz0ibm9uZSIgZD0iTS0xMTQyLjcxNC02NTEuNzkxbC02Ljk3MiA1LjMzNy0yNC42NzkgMTkuMjIzaDBjMTUuNjczIDMxLjA4NiA0Ny43OTYgNTIuNTYxIDg1LjAzIDUyLjU2MSAyNS43MTcgMCA0Ny4yNzgtOC40ODYgNjMuMDM4LTIzLjAzM2wtMzAuOTEzLTIzLjk4NmMtOC40ODYgNS43MTUtMTkuMzEgOS4xNzktMzIuMTI1IDkuMTc5LTI0Ljc2NSAwLTQ1LjgwNi0xNi43MTItNTMuMzQtMzkuMjI2eiIgZmlsbD0iIzM0YTg1MyIvPjxwYXRoIGNsaXAtcGF0aD0ibm9uZSIgbWFzaz0ibm9uZSIgZD0iTS0xMTc0LjM2NS03MTIuNjFjLTYuNDk0IDEyLjgxNS0xMC4yMTcgMjcuMjc2LTEwLjIxNyA0Mi42ODlzMy43MjMgMjkuODc0IDEwLjIxNyA0Mi42ODljMCAuMDg2IDMxLjY5My0yNC41OTIgMzEuNjkzLTI0LjU5Mi0xLjkwNS01LjcxNS0zLjAzMS0xMS43NzYtMy4wMzEtMTguMDk4czEuMTI2LTEyLjM4MyAzLjAzMS0xOC4wOTh6IiBmaWxsPSIjZmJiYzA1Ii8+PHBhdGggZD0iTS0xMDg5LjMzMy03MjcuMjQ0YzE0LjAyOCAwIDI2LjQ5NyA0Ljg0OSAzNi40NTUgMTQuMjAxbDI3LjI3Ni0yNy4yNzZjLTE2LjUzOS0xNS40MTMtMzguMDEzLTI0Ljg1Mi02My43MzEtMjQuODUyLTM3LjIzNCAwLTY5LjM1OSAyMS4zODgtODUuMDMyIDUyLjU2MWwzMS42OTIgMjQuNTkyYzcuNTMzLTIyLjUxNCAyOC41NzUtMzkuMjI2IDUzLjM0LTM5LjIyNnoiIGZpbGw9IiNlYTQzMzUiIGNsaXAtcGF0aD0ibm9uZSIgbWFzaz0ibm9uZSIvPjwvZz48L3N2Zz4=";
const facebookIconUri =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGRhdGEtbmFtZT0iRWJlbmUgMSIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgaWQ9ImZhY2Vib29rLWxvZ28tMjAxOSI+PHBhdGggZmlsbD0iIzE4NzdmMiIgZD0iTTEwMjQsNTEyQzEwMjQsMjI5LjIzMDE2LDc5NC43Njk3OCwwLDUxMiwwUzAsMjI5LjIzMDE2LDAsNTEyYzAsMjU1LjU1NCwxODcuMjMxLDQ2Ny4zNzAxMiw0MzIsNTA1Ljc3Nzc3VjY2MEgzMDJWNTEySDQzMlYzOTkuMkM0MzIsMjcwLjg3OTgyLDUwOC40Mzg1NCwyMDAsNjI1LjM4OTIyLDIwMCw2ODEuNDA3NjUsMjAwLDc0MCwyMTAsNzQwLDIxMFYzMzZINjc1LjQzNzEzQzYxMS44MzUwOCwzMzYsNTkyLDM3NS40NjY2Nyw1OTIsNDE1Ljk1NzI4VjUxMkg3MzRMNzExLjMsNjYwSDU5MnYzNTcuNzc3NzdDODM2Ljc2OSw5NzkuMzcwMTIsMTAyNCw3NjcuNTU0LDEwMjQsNTEyWiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik03MTEuMyw2NjAsNzM0LDUxMkg1OTJWNDE1Ljk1NzI4QzU5MiwzNzUuNDY2NjcsNjExLjgzNTA4LDMzNiw2NzUuNDM3MTMsMzM2SDc0MFYyMTBzLTU4LjU5MjM1LTEwLTExNC42MTA3OC0xMEM1MDguNDM4NTQsMjAwLDQzMiwyNzAuODc5ODIsNDMyLDM5OS4yVjUxMkgzMDJWNjYwSDQzMnYzNTcuNzc3NzdhNTE3LjM5NjE5LDUxNy4zOTYxOSwwLDAsMCwxNjAsMFY2NjBaIj48L3BhdGg+PC9zdmc+";
const appleIconUri =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDM4IiBoZWlnaHQ9IjI1MDAiIHZpZXdCb3g9IjAgMCA0OTYuMjU1IDYwOC43MjgiIGlkPSJhcHBsZSI+PHBhdGggZmlsbD0iIzk5OSIgZD0iTTI3My44MSA1Mi45NzNDMzEzLjgwNi4yNTcgMzY5LjQxIDAgMzY5LjQxIDBzOC4yNzEgNDkuNTYyLTMxLjQ2MyA5Ny4zMDZjLTQyLjQyNiA1MC45OC05MC42NDkgNDIuNjM4LTkwLjY0OSA0Mi42MzhzLTkuMDU1LTQwLjA5NCAyNi41MTItODYuOTcxek0yNTIuMzg1IDE3NC42NjJjMjAuNTc2IDAgNTguNzY0LTI4LjI4NCAxMDguNDcxLTI4LjI4NCA4NS41NjIgMCAxMTkuMjIyIDYwLjg4MyAxMTkuMjIyIDYwLjg4M3MtNjUuODMzIDMzLjY1OS02NS44MzMgMTE1LjMzMWMwIDkyLjEzMyA4Mi4wMSAxMjMuODg1IDgyLjAxIDEyMy44ODVzLTU3LjMyOCAxNjEuMzU3LTEzNC43NjIgMTYxLjM1N2MtMzUuNTY1IDAtNjMuMjE1LTIzLjk2Ny0xMDAuNjg4LTIzLjk2Ny0zOC4xODggMC03Ni4wODQgMjQuODYxLTEwMC43NjYgMjQuODYxQzg5LjMzIDYwOC43MyAwIDQ1NS42NjYgMCAzMzIuNjI4YzAtMTIxLjA1MiA3NS42MTItMTg0LjU1NCAxNDYuNTMzLTE4NC41NTQgNDYuMTA1IDAgODEuODgzIDI2LjU4OCAxMDUuODUyIDI2LjU4OHoiPjwvcGF0aD48L3N2Zz4=";
const discordIconUri =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBpZD0iZGlzY29yZCI+PHBhdGggZmlsbD0iIzY2NjVkMiIgZD0iTTg1LjIyLDI0Ljk1OGMtMTEuNDU5LTguNTc1LTIyLjQzOC04LjMzNC0yMi40MzgtOC4zMzRsLTEuMTIyLDEuMjgyCgkJCQljMTMuNjIzLDQuMDg3LDE5Ljk1NCwxMC4wOTcsMTkuOTU0LDEwLjA5N2MtMTkuNDkxLTEwLjczMS00NC4zMTctMTAuNjU0LTY0LjU5LDBjMCwwLDYuNTcxLTYuMzMxLDIwLjk5Ni0xMC40MThsLTAuODAxLTAuOTYyCgkJCQljMCwwLTEwLjg5OS0wLjI0LTIyLjQzOCw4LjMzNGMwLDAtMTEuNTQsMjAuNzU1LTExLjU0LDQ2LjMxOWMwLDAsNi43MzIsMTEuNTQsMjQuNDQyLDEyLjEwMWMwLDAsMi45NjUtMy41MjYsNS4zNjktNi41NzEKCQkJCWMtMTAuMTc3LTMuMDQ1LTE0LjAyNC05LjM3Ni0xNC4wMjQtOS4zNzZjNi4zOTQsNC4wMDEsMTIuODU5LDYuNTA1LDIwLjkxNiw4LjA5NGMxMy4xMDgsMi42OTgsMjkuNDEzLTAuMDc2LDQxLjU5MS04LjA5NAoJCQkJYzAsMC00LjAwNyw2LjQ5MS0xNC41MDUsOS40NTZjMi40MDQsMi45NjUsNS4yODksNi40MTEsNS4yODksNi40MTFjMTcuNzEtMC41NjEsMjQuNDQxLTEyLjEwMSwyNC40NDEtMTIuMDIKCQkJCUM5Ni43NTksNDUuNzEzLDg1LjIyLDI0Ljk1OCw4NS4yMiwyNC45NTh6IE0zNS4wNTUsNjMuODI0Yy00LjQ4OCwwLTguMTc0LTMuOTI3LTguMTc0LTguODE1CgkJCQljMC4zMjgtMTEuNzA3LDE2LjEwMi0xMS42NzEsMTYuMzQ4LDBDNDMuMjI5LDU5Ljg5NywzOS42MjIsNjMuODI0LDM1LjA1NSw2My44MjR6IE02NC4zMDQsNjMuODI0CgkJCQljLTQuNDg4LDAtOC4xNzQtMy45MjctOC4xNzQtOC44MTVjMC4zNi0xMS42ODQsMTUuOTM3LTExLjY4OSwxNi4zNDgsMEM3Mi40NzgsNTkuODk3LDY4Ljg3Miw2My44MjQsNjQuMzA0LDYzLjgyNHoiPjwvcGF0aD48L3N2Zz4=";
const coinbaseIconUri =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTU2IiBoZWlnaHQ9IjU1NiIgdmlld0JveD0iMCAwIDU1NiA1NTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xNDhfNSkiPgo8cGF0aCBkPSJNMjc4IDBDNDMxLjUzMyAwIDU1NiAxMjQuNDY3IDU1NiAyNzhDNTU2IDQzMS41MzMgNDMxLjUzMyA1NTYgMjc4IDU1NkMxMjQuNDY3IDU1NiAwIDQzMS41MzMgMCAyNzhDMCAxMjQuNDY3IDEyNC40NjcgMCAyNzggMFoiIGZpbGw9IiMwMDUyRkYiLz4KPHBhdGggZD0iTTI3OC40ODIgMzc1LjE5QzIyNC40OSAzNzUuMTkgMTgwLjg2MiAzMzEuNDEgMTgwLjg2MiAyNzcuNUMxODAuODYyIDIyMy41OSAyMjQuNjEgMTc5LjgxIDI3OC40ODIgMTc5LjgxQzMyNi44MSAxNzkuODEgMzY2Ljk0MyAyMTUuMDI3IDM3NC42NTYgMjYxLjIxOEg0NzNDNDY0LjY4NCAxNjAuODc1IDM4MC44MDMgODIgMjc4LjM2MiA4MkMxNzAuNDk3IDgyIDgzIDE2OS41NTkgODMgMjc3LjVDODMgMzg1LjQ0MSAxNzAuNDk3IDQ3MyAyNzguMzYyIDQ3M0MzODAuODAzIDQ3MyA0NjQuNjg0IDM5NC4xMjUgNDczIDI5My43ODJIMzc0LjUzNkMzNjYuODIzIDMzOS45NzMgMzI2LjgxIDM3NS4xOSAyNzguNDgyIDM3NS4xOVoiIGZpbGw9IndoaXRlIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMTQ4XzUiPgo8cmVjdCB3aWR0aD0iNTU2IiBoZWlnaHQ9IjU1NiIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K";
const lineIconUri =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMjAiIGhlaWdodD0iMzIwIiB2aWV3Qm94PSIwIDAgMzIwIDMyMCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiMwNmM3NTU7fS5jbHMtMntmaWxsOiNmZmY7fTwvc3R5bGU+PC9kZWZzPjxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGlkPSJMSU5FX0xPR08iIGRhdGEtbmFtZT0iTElORSBMT0dPIj48cmVjdCBjbGFzcz0iY2xzLTEiIHdpZHRoPSIzMjAiIGhlaWdodD0iMzIwIiByeD0iNzIuMTQiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0yNjYuNjYsMTQ0LjkyYzAtNDcuNzQtNDcuODYtODYuNTgtMTA2LjY5LTg2LjU4UzUzLjI4LDk3LjE4LDUzLjI4LDE0NC45MmMwLDQyLjgsMzgsNzguNjUsODkuMjIsODUuNDIsMy40OC43NSw4LjIxLDIuMjksOS40LDUuMjYsMS4wOCwyLjcuNzEsNi45My4zNSw5LjY1LDAsMC0xLjI1LDcuNTMtMS41Miw5LjEzLS40NywyLjctMi4xNSwxMC41NSw5LjI0LDUuNzZzNjEuNDQtMzYuMTgsODMuODItNjEuOTVoMEMyNTkuMjUsMTgxLjI0LDI2Ni42NiwxNjQsMjY2LjY2LDE0NC45MloiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0yMzEuMTYsMTcyLjQ5aC0zMGEyLDIsMCwwLDEtMi0ydjBoMFYxMjMuOTRoMHYwYTIsMiwwLDAsMSwyLTJoMzBhMiwyLDAsMCwxLDIsMnY3LjU3YTIsMiwwLDAsMS0yLDJIMjEwLjc5djcuODVoMjAuMzdhMiwyLDAsMCwxLDIsMlYxNTFhMiwyLDAsMCwxLTIsMkgyMTAuNzl2Ny44NmgyMC4zN2EyLDIsMCwwLDEsMiwydjcuNTZBMiwyLDAsMCwxLDIzMS4xNiwxNzIuNDlaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTIwLjI5LDE3Mi40OWEyLDIsMCwwLDAsMi0ydi03LjU2YTIsMiwwLDAsMC0yLTJIOTkuOTJ2LTM3YTIsMiwwLDAsMC0yLTJIOTAuMzJhMiwyLDAsMCwwLTIsMnY0Ni41M2gwdjBhMiwyLDAsMCwwLDIsMmgzMFoiLz48cmVjdCBjbGFzcz0iY2xzLTEiIHg9IjEyOC43MyIgeT0iMTIxLjg1IiB3aWR0aD0iMTEuNjQiIGhlaWdodD0iNTAuNjQiIHJ4PSIyLjA0Ii8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTg5Ljg0LDEyMS44NWgtNy41NmEyLDIsMCwwLDAtMiwydjI3LjY2bC0yMS4zLTI4Ljc3YTEuMiwxLjIsMCwwLDAtLjE3LS4yMXYwbC0uMTItLjEyLDAsMC0uMTEtLjA5LS4wNiwwLS4xMS0uMDgtLjA2LDAtLjExLS4wNi0uMDcsMC0uMTEsMC0uMDcsMC0uMTIsMC0uMDgsMC0uMTIsMGgtLjA4bC0uMTEsMGgtNy43MWEyLDIsMCwwLDAtMiwydjQ2LjU2YTIsMiwwLDAsMCwyLDJoNy41N2EyLDIsMCwwLDAsMi0yVjE0Mi44MWwyMS4zMywyOC44YTIsMiwwLDAsMCwuNTIuNTJoMGwuMTIuMDguMDYsMCwuMS4wNS4xLDAsLjA3LDAsLjE0LDBoMGEyLjQyLDIuNDIsMCwwLDAsLjU0LjA3aDcuNTJhMiwyLDAsMCwwLDItMlYxMjMuODlBMiwyLDAsMCwwLDE4OS44NCwxMjEuODVaIi8+PC9nPjwvZz48L3N2Zz4=";
const farcasterIconUri =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwMCIgaGVpZ2h0PSIxMDAwIiB2aWV3Qm94PSIwIDAgMTAwMCAxMDAwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTAwMCIgaGVpZ2h0PSIxMDAwIiByeD0iMjAwIiBmaWxsPSIjODU1RENEIi8+CjxwYXRoIGQ9Ik0yNTcuNzc4IDE1NS41NTZINzQyLjIyMlY4NDQuNDQ0SDY3MS4xMTFWNTI4Ljg4OUg2NzAuNDE0QzY2Mi41NTQgNDQxLjY3NyA1ODkuMjU4IDM3My4zMzMgNTAwIDM3My4zMzNDNDEwLjc0MiAzNzMuMzMzIDMzNy40NDYgNDQxLjY3NyAzMjkuNTg2IDUyOC44ODlIMzI4Ljg4OVY4NDQuNDQ0SDI1Ny43NzhWMTU1LjU1NloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xMjguODg5IDI1My4zMzNMMTU3Ljc3OCAzNTEuMTExSDE4Mi4yMjJWNzQ2LjY2N0MxNjkuOTQ5IDc0Ni42NjcgMTYwIDc1Ni42MTYgMTYwIDc2OC44ODlWNzk1LjU1NkgxNTUuNTU2QzE0My4yODMgNzk1LjU1NiAxMzMuMzMzIDgwNS41MDUgMTMzLjMzMyA4MTcuNzc4Vjg0NC40NDRIMzgyLjIyMlY4MTcuNzc4QzM4Mi4yMjIgODA1LjUwNSAzNzIuMjczIDc5NS41NTYgMzYwIDc5NS41NTZIMzU1LjU1NlY3NjguODg5QzM1NS41NTYgNzU2LjYxNiAzNDUuNjA2IDc0Ni42NjcgMzMzLjMzMyA3NDYuNjY3SDMwNi42NjdWMjUzLjMzM0gxMjguODg5WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTY3NS41NTYgNzQ2LjY2N0M2NjMuMjgzIDc0Ni42NjcgNjUzLjMzMyA3NTYuNjE2IDY1My4zMzMgNzY4Ljg4OVY3OTUuNTU2SDY0OC44ODlDNjM2LjYxNiA3OTUuNTU2IDYyNi42NjcgODA1LjUwNSA2MjYuNjY3IDgxNy43NzhWODQ0LjQ0NEg4NzUuNTU2VjgxNy43NzhDODc1LjU1NiA4MDUuNTA1IDg2NS42MDYgNzk1LjU1NiA4NTMuMzMzIDc5NS41NTZIODQ4Ljg4OVY3NjguODg5Qzg0OC44ODkgNzU2LjYxNiA4MzguOTQgNzQ2LjY2NyA4MjYuNjY3IDc0Ni42NjdWMzUxLjExMUg4NTEuMTExTDg4MCAyNTMuMzMzSDcwMi4yMjJWNzQ2LjY2N0g2NzUuNTU2WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==";
const telegramIconUri =
  "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTAwMHB4IiBoZWlnaHQ9IjEwMDBweCIgdmlld0JveD0iMCAwIDEwMDAgMTAwMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTMuMiAoNzI2NDMpIC0gaHR0cHM6Ly9za2V0Y2hhcHAuY29tIC0tPgogICAgPHRpdGxlPkFydGJvYXJkPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSI1MCUiIHkxPSIwJSIgeDI9IjUwJSIgeTI9Ijk5LjI1ODM0MDQlIiBpZD0ibGluZWFyR3JhZGllbnQtMSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMyQUFCRUUiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzIyOUVEOSIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJBcnRib2FyZCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbCIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0xKSIgY3g9IjUwMCIgY3k9IjUwMCIgcj0iNTAwIj48L2NpcmNsZT4KICAgICAgICA8cGF0aCBkPSJNMjI2LjMyODQxOSw0OTQuNzIyMDY5IEMzNzIuMDg4NTczLDQzMS4yMTY2ODUgNDY5LjI4NDgzOSwzODkuMzUwMDQ5IDUxNy45MTcyMTYsMzY5LjEyMjE2MSBDNjU2Ljc3MjUzNSwzMTEuMzY3NDMgNjg1LjYyNTQ4MSwzMDEuMzM0ODE1IDcwNC40MzE0MjcsMzAxLjAwMzUzMiBDNzA4LjU2NzYyMSwzMDAuOTMwNjcgNzE3LjgxNTgzOSwzMDEuOTU1NzQzIDcyMy44MDY0NDYsMzA2LjgxNjcwNyBDNzI4Ljg2NDc5NywzMTAuOTIxMjEgNzMwLjI1NjU1MiwzMTYuNDY1ODEgNzMwLjkyMjU1MSwzMjAuMzU3MzI5IEM3MzEuNTg4NTUxLDMyNC4yNDg4NDggNzMyLjQxNzg3OSwzMzMuMTEzODI4IDczMS43NTg2MjYsMzQwLjA0MDY2NiBDNzI0LjIzNDAwNyw0MTkuMTAyNDg2IDY5MS42NzUxMDQsNjEwLjk2NDY3NCA2NzUuMTEwOTgyLDY5OS41MTUyNjcgQzY2OC4xMDIwOCw3MzYuOTg0MzQyIDY1NC4zMDEzMzYsNzQ5LjU0NzUzMiA2NDAuOTQwNjE4LDc1MC43NzcwMDYgQzYxMS45MDQ2ODQsNzUzLjQ0ODkzOCA1ODkuODU2MTE1LDczMS41ODgwMzUgNTYxLjczMzM5Myw3MTMuMTUzMjM3IEM1MTcuNzI2ODg2LDY4NC4zMDY0MTYgNDkyLjg2NjAwOSw2NjYuMzQ5MTgxIDQ1MC4xNTAwNzQsNjM4LjIwMDAxMyBDNDAwLjc4NDQyLDYwNS42Njg3OCA0MzIuNzg2MTE5LDU4Ny43ODkwNDggNDYwLjkxOTQ2Miw1NTguNTY4NTYzIEM0NjguMjgyMDkxLDU1MC45MjE0MjMgNTk2LjIxNTA4LDQzNC41NTY0NzkgNTk4LjY5MTIyNyw0MjQuMDAwMzU1IEM1OTkuMDAwOTEsNDIyLjY4MDEzNSA1OTkuMjg4MzEyLDQxNy43NTg5ODEgNTk2LjM2NDc0LDQxNS4xNjA0MzEgQzU5My40NDExNjgsNDEyLjU2MTg4MSA1ODkuMTI2MjI5LDQxMy40NTA0ODQgNTg2LjAxMjQ0OCw0MTQuMTU3MTk4IEM1ODEuNTk4NzU4LDQxNS4xNTg5NDMgNTExLjI5Nzc5Myw0NjEuNjI1Mjc0IDM3NS4xMDk1NTMsNTUzLjU1NjE4OSBDMzU1LjE1NDg1OCw1NjcuMjU4NjIzIDMzNy4wODA1MTUsNTczLjkzNDkwOCAzMjAuODg2NTI0LDU3My41ODUwNDYgQzMwMy4wMzM5NDgsNTczLjE5OTM1MSAyNjguNjkyNzU0LDU2My40OTA5MjggMjQzLjE2MzYwNiw1NTUuMTkyNDA4IEMyMTEuODUxMDY3LDU0NS4wMTM5MzYgMTg2Ljk2NDQ4NCw1MzkuNjMyNTA0IDE4OS4xMzE1NDcsNTIyLjM0NjMwOSBDMTkwLjI2MDI4Nyw1MTMuMzQyNTg5IDIwMi42NTkyNDQsNTA0LjEzNDUwOSAyMjYuMzI4NDE5LDQ5NC43MjIwNjkgWiIgaWQ9IlBhdGgtMyIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPgogICAgPC9nPgo8L3N2Zz4=";
const twitchIconUri =
  "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgMjQwMCAyODAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNDAwIDI4MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkZGRkZGO30KCS5zdDF7ZmlsbDojOTE0NkZGO30KPC9zdHlsZT4KPHRpdGxlPkFzc2V0IDI8L3RpdGxlPgo8Zz4KCTxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMjIwMCwxMzAwIDE4MDAsMTcwMCAxNDAwLDE3MDAgMTA1MCwyMDUwIDEwNTAsMTcwMCA2MDAsMTcwMCA2MDAsMjAwIDIyMDAsMjAwIAkiLz4KCTxnPgoJCTxnIGlkPSJMYXllcl8xLTIiPgoJCQk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNTAwLDBMMCw1MDB2MTgwMGg2MDB2NTAwbDUwMC01MDBoNDAwbDkwMC05MDBWMEg1MDB6IE0yMjAwLDEzMDBsLTQwMCw0MDBoLTQwMGwtMzUwLDM1MHYtMzUwSDYwMFYyMDBoMTYwMAoJCQkJVjEzMDB6Ii8+CgkJCTxyZWN0IHg9IjE3MDAiIHk9IjU1MCIgY2xhc3M9InN0MSIgd2lkdGg9IjIwMCIgaGVpZ2h0PSI2MDAiLz4KCQkJPHJlY3QgeD0iMTE1MCIgeT0iNTUwIiBjbGFzcz0ic3QxIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjYwMCIvPgoJCTwvZz4KCTwvZz4KPC9nPgo8L3N2Zz4K";
const githubIconUri =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTA2IiBoZWlnaHQ9IjEwNiIgdmlld0JveD0iMCAwIDEwNiAxMDYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjUzIiBjeT0iNTMiIHI9IjUzIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTUyLjg1NCA0QzI1LjgzOSA0IDQgMjYgNCA1My4yMTdDNCA3NC45NzMgMTcuOTkzIDkzLjM4OSAzNy40MDUgOTkuOTA3QzM5LjgzMiAxMDAuMzk3IDQwLjcyMSA5OC44NDggNDAuNzIxIDk3LjU0NUM0MC43MjEgOTYuNDA0IDQwLjY0MSA5Mi40OTMgNDAuNjQxIDg4LjQxOEMyNy4wNTEgOTEuMzUyIDI0LjIyMSA4Mi41NTEgMjQuMjIxIDgyLjU1MUMyMi4wMzcgNzYuODQ3IDE4LjgwMSA3NS4zODEgMTguODAxIDc1LjM4MUMxNC4zNTMgNzIuMzY2IDE5LjEyNSA3Mi4zNjYgMTkuMTI1IDcyLjM2NkMyNC4wNTkgNzIuNjkyIDI2LjY0OCA3Ny40MTggMjYuNjQ4IDc3LjQxOEMzMS4wMTUgODQuOTE0IDM4LjA1MiA4Mi43OTYgNDAuODgzIDgxLjQ5MkM0MS4yODcgNzguMzE0IDQyLjU4MiA3Ni4xMTQgNDMuOTU3IDc0Ljg5MkMzMy4xMTggNzMuNzUxIDIxLjcxNCA2OS41MTQgMjEuNzE0IDUwLjYwOUMyMS43MTQgNDUuMjMxIDIzLjY1NCA0MC44MzEgMjYuNzI4IDM3LjQwOUMyNi4yNDMgMzYuMTg3IDI0LjU0NCAzMS4xMzQgMjcuMjE0IDI0LjM3MUMyNy4yMTQgMjQuMzcxIDMxLjMzOSAyMy4wNjcgNDAuNjQgMjkuNDIzQzQ0LjYyMjEgMjguMzQ1NyA0OC43Mjg4IDI3Ljc5NzYgNTIuODU0IDI3Ljc5M0M1Ni45NzkgMjcuNzkzIDYxLjE4NCAyOC4zNjQgNjUuMDY3IDI5LjQyM0M3NC4zNjkgMjMuMDY3IDc4LjQ5NCAyNC4zNzEgNzguNDk0IDI0LjM3MUM4MS4xNjQgMzEuMTM0IDc5LjQ2NCAzNi4xODcgNzguOTc5IDM3LjQwOUM4Mi4xMzQgNDAuODMxIDgzLjk5NCA0NS4yMzEgODMuOTk0IDUwLjYwOUM4My45OTQgNjkuNTE0IDcyLjU5IDczLjY2OSA2MS42NyA3NC44OTJDNjMuNDUgNzYuNDQgNjQuOTg2IDc5LjM3MyA2NC45ODYgODQuMDE4QzY0Ljk4NiA5MC42MTggNjQuOTA2IDk1LjkxNSA2NC45MDYgOTcuNTQ0QzY0LjkwNiA5OC44NDggNjUuNzk2IDEwMC4zOTcgNjguMjIyIDk5LjkwOEM4Ny42MzQgOTMuMzg4IDEwMS42MjcgNzQuOTczIDEwMS42MjcgNTMuMjE3QzEwMS43MDcgMjYgNzkuNzg4IDQgNTIuODU0IDRaIiBmaWxsPSIjMjQyOTJGIi8+Cjwvc3ZnPgo=";
const xIcon =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgdmlld0JveD0iMCAwIDMyMCAzMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMjAiIGhlaWdodD0iMzIwIiByeD0iMjQiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0xNzcuMzE1IDE0NS4zMzVMMjQ1LjA2OCA2N0gyMjkuMDEzTDE3MC4xODIgMTM1LjAxN0wxMjMuMTk1IDY3SDY5TDE0MC4wNTUgMTY5Ljg1NEw2OSAyNTJIODUuMDU2M0wxNDcuMTgzIDE4MC4xNzJMMTk2LjgwNSAyNTJIMjUxTDE3Ny4zMTEgMTQ1LjMzNUgxNzcuMzE1Wk0xNTUuMzIzIDE3MC43NkwxNDguMTI0IDE2MC41MThMOTAuODQxNyA3OS4wMjJIMTE1LjUwM0wxNjEuNzMxIDE0NC43OTJMMTY4LjkzIDE1NS4wMzRMMjI5LjAyIDI0MC41MjVIMjA0LjM1OUwxNTUuMzIzIDE3MC43NjRWMTcwLjc2WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==";
const emailIcon =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzLjMzMzUgMi42NjY1SDIuNjY2ODNDMS45MzA0NSAyLjY2NjUgMS4zMzM1IDMuMjYzNDYgMS4zMzM1IDMuOTk5ODRWMTEuOTk5OEMxLjMzMzUgMTIuNzM2MiAxLjkzMDQ1IDEzLjMzMzIgMi42NjY4MyAxMy4zMzMySDEzLjMzMzVDMTQuMDY5OSAxMy4zMzMyIDE0LjY2NjggMTIuNzM2MiAxNC42NjY4IDExLjk5OThWMy45OTk4NEMxNC42NjY4IDMuMjYzNDYgMTQuMDY5OSAyLjY2NjUgMTMuMzMzNSAyLjY2NjVaIiBzdHJva2U9IiMzMzg1RkYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTQuNjY2OCA0LjY2NjVMOC42ODY4MyA4LjQ2NjVDOC40ODEwMSA4LjU5NTQ1IDguMjQzMDQgOC42NjM4NCA4LjAwMDE2IDguNjYzODRDNy43NTcyOCA4LjY2Mzg0IDcuNTE5MzEgOC41OTU0NSA3LjMxMzUgOC40NjY1TDEuMzMzNSA0LjY2NjUiIHN0cm9rZT0iIzMzODVGRiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=";
const phoneIcon =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzU2MzlfNjMyKSI+CjxwYXRoIGQ9Ik0xNC42NjY5IDExLjI4MDJWMTMuMjgwMkMxNC42Njc3IDEzLjQ2NTkgMTQuNjI5NyAxMy42NDk3IDE0LjU1NTMgMTMuODE5OEMxNC40ODA5IDEzLjk4OTkgMTQuMzcxOCAxNC4xNDI2IDE0LjIzNSAxNC4yNjgxQzE0LjA5ODIgMTQuMzkzNyAxMy45MzY3IDE0LjQ4OTIgMTMuNzYwOCAxNC41NDg3QzEzLjU4NDkgMTQuNjA4MiAxMy4zOTg1IDE0LjYzMDMgMTMuMjEzNiAxNC42MTM2QzExLjE2MjIgMTQuMzkwNyA5LjE5MTYxIDEzLjY4OTcgNy40NjAyOCAxMi41NjY5QzUuODQ5NSAxMS41NDMzIDQuNDgzODQgMTAuMTc3NyAzLjQ2MDI4IDguNTY2ODlDMi4zMzM2IDYuODI3NyAxLjYzMjQ0IDQuODQ3NTYgMS40MTM2MSAyLjc4Njg5QzEuMzk2OTUgMi42MDI1NCAxLjQxODg2IDIuNDE2NzMgMS40Nzc5NSAyLjI0MTMxQzEuNTM3MDMgMi4wNjU4OSAxLjYzMTk5IDEuOTA0NjkgMS43NTY3OSAxLjc2Nzk3QzEuODgxNTkgMS42MzEyNiAyLjAzMzQ4IDEuNTIyMDMgMi4yMDI4MSAxLjQ0NzI0QzIuMzcyMTMgMS4zNzI0NSAyLjU1NTE3IDEuMzMzNzQgMi43NDAyOCAxLjMzMzU2SDQuNzQwMjhDNS4wNjM4MiAxLjMzMDM4IDUuMzc3NDggMS40NDQ5NSA1LjYyMjc5IDEuNjU1OTJDNS44NjgxIDEuODY2ODkgNi4wMjgzMyAyLjE1OTg2IDYuMDczNjEgMi40ODAyM0M2LjE1ODAzIDMuMTIwMjcgNi4zMTQ1OCAzLjc0ODcxIDYuNTQwMjggNC4zNTM1NkM2LjYyOTk4IDQuNTkyMTggNi42NDkzOSA0Ljg1MTUgNi41OTYyMiA1LjEwMDgxQzYuNTQzMDUgNS4zNTAxMiA2LjQxOTUyIDUuNTc4OTcgNi4yNDAyOCA1Ljc2MDIzTDUuMzkzNjEgNi42MDY4OUM2LjM0MjY1IDguMjc1OTIgNy43MjQ1OCA5LjY1Nzg2IDkuMzkzNjEgMTAuNjA2OUwxMC4yNDAzIDkuNzYwMjNDMTAuNDIxNSA5LjU4MDk5IDEwLjY1MDQgOS40NTc0NiAxMC44OTk3IDkuNDA0MjlDMTEuMTQ5IDkuMzUxMTIgMTEuNDA4MyA5LjM3MDUzIDExLjY0NjkgOS40NjAyM0MxMi4yNTE4IDkuNjg1OTMgMTIuODgwMiA5Ljg0MjQ4IDEzLjUyMDMgOS45MjY4OUMxMy44NDQxIDkuOTcyNTggMTQuMTM5OSAxMC4xMzU3IDE0LjM1MTMgMTAuMzg1MkMxNC41NjI3IDEwLjYzNDggMTQuNjc1MSAxMC45NTMzIDE0LjY2NjkgMTEuMjgwMloiIHN0cm9rZT0iIzMzODVGRiIgc3Ryb2tlLXdpZHRoPSIxLjMzMzMzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF81NjM5XzYzMiI+CjxyZWN0IHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K";
export const genericTokenIcon =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzQwNDhfNDIzMSkiPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTcuNTg0IDQuODU1NjZDNy43MTA2OSA0Ljc4MjUyIDcuODU0MzkgNC43NDQwMiA4LjAwMDY3IDQuNzQ0MDJDOC4xNDY5NSA0Ljc0NDAyIDguMjkwNjUgNC43ODI1MiA4LjQxNzM0IDQuODU1NjZMMTAuNTE1MyA2LjA2NjY2QzEwLjY0MiA2LjEzOTggMTAuNzQ3MiA2LjI0NSAxMC44MjA0IDYuMzcxNjhDMTAuODkzNSA2LjQ5ODM1IDEwLjkzMiA2LjY0MjA1IDEwLjkzMiA2Ljc4ODMzVjkuMjExQzEwLjkzMiA5LjM1NzI3IDEwLjg5MzUgOS41MDA5NyAxMC44MjA0IDkuNjI3NjVDMTAuNzQ3MiA5Ljc1NDMzIDEwLjY0MiA5Ljg1OTUzIDEwLjUxNTMgOS45MzI2Nkw4LjQxNzM0IDExLjE0NEM4LjI5MDY1IDExLjIxNzEgOC4xNDY5NSAxMS4yNTU2IDguMDAwNjcgMTEuMjU1NkM3Ljg1NDM5IDExLjI1NTYgNy43MTA2OSAxMS4yMTcxIDcuNTg0IDExLjE0NEw1LjQ4NiA5LjkzMjY2QzUuMzU5MzIgOS44NTk1MyA1LjI1NDEzIDkuNzU0MzMgNS4xODA5OSA5LjYyNzY1QzUuMTA3ODUgOS41MDA5NyA1LjA2OTM0IDkuMzU3MjcgNS4wNjkzNCA5LjIxMVY2Ljc4ODY2QzUuMDY5MjggNi42NDIzMyA1LjEwNzc2IDYuNDk4NTYgNS4xODA5IDYuMzcxODJDNS4yNTQwNSA2LjI0NTA4IDUuMzU5MjcgNi4xMzk4MyA1LjQ4NiA2LjA2NjY2TDcuNTg0IDQuODU1NjZaTTguMDg0IDUuNDMzQzguMDU4NjcgNS40MTgzNyA4LjAyOTkzIDUuNDEwNjcgOC4wMDA2NyA1LjQxMDY3QzcuOTcxNDEgNS40MTA2NyA3Ljk0MjY3IDUuNDE4MzcgNy45MTczNCA1LjQzM0w1LjgxOTM0IDYuNjQ0MzNDNS43OTQgNi42NTg5NiA1Ljc3Mjk2IDYuNjggNS43NTgzMyA2LjcwNTMzQzUuNzQzNyA2LjczMDY3IDUuNzM2IDYuNzU5NDEgNS43MzYgNi43ODg2NlY5LjIxMTMzQzUuNzM2IDkuMjQwNTkgNS43NDM3IDkuMjY5MzMgNS43NTgzMyA5LjI5NDY2QzUuNzcyOTYgOS4zMiA1Ljc5NCA5LjM0MTA0IDUuODE5MzQgOS4zNTU2Nkw3LjkxNzM0IDEwLjU2NjdDNy45NDI2NyAxMC41ODEzIDcuOTcxNDEgMTAuNTg5IDguMDAwNjcgMTAuNTg5QzguMDI5OTMgMTAuNTg5IDguMDU4NjcgMTAuNTgxMyA4LjA4NCAxMC41NjY3TDEwLjE4MiA5LjM1NTMzQzEwLjIwNzMgOS4zNDA3IDEwLjIyODQgOS4zMTk2NiAxMC4yNDMgOS4yOTQzM0MxMC4yNTc2IDkuMjY4OTkgMTAuMjY1MyA5LjI0MDI1IDEwLjI2NTMgOS4yMTFWNi43ODg2NkMxMC4yNjUzIDYuNzU5NDEgMTAuMjU3NiA2LjczMDY3IDEwLjI0MyA2LjcwNTMzQzEwLjIyODQgNi42OCAxMC4yMDczIDYuNjU4OTYgMTAuMTgyIDYuNjQ0MzNMOC4wODQgNS40MzNaIiBmaWxsPSIjNUM1QzVDIi8+CjwvZz4KPGNpcmNsZSBjeD0iOCIgY3k9IjgiIHI9IjcuNjkyMzEiIHN0cm9rZT0iIzVDNUM1QyIgc3Ryb2tlLXdpZHRoPSIwLjYxNTM4NSIvPgo8Y2lyY2xlIGN4PSI3Ljk5OTU1IiBjeT0iOC4wMDAwNCIgcj0iNS44NDYxNSIgc3Ryb2tlPSIjNUM1QzVDIiBzdHJva2Utd2lkdGg9IjAuNjE1Mzg1Ii8+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzQwNDhfNDIzMSI+CjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IndoaXRlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0IDQpIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==";
const guestIcon =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE5IDIxVjE5QzE5IDE3LjkzOTEgMTguNTc4NiAxNi45MjE3IDE3LjgyODQgMTYuMTcxNkMxNy4wNzgzIDE1LjQyMTQgMTYuMDYwOSAxNSAxNSAxNUg5QzcuOTM5MTMgMTUgNi45MjE3MiAxNS40MjE0IDYuMTcxNTcgMTYuMTcxNkM1LjQyMTQzIDE2LjkyMTcgNSAxNy45MzkxIDUgMTlWMjEiIHN0cm9rZT0iIzMzODVGRiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTEyIDExQzE0LjIwOTEgMTEgMTYgOS4yMDkxNCAxNiA3QzE2IDQuNzkwODYgMTQuMjA5MSAzIDEyIDNDOS43OTA4NiAzIDggNC43OTA4NiA4IDdDOCA5LjIwOTE0IDkuNzkwODYgMTEgMTIgMTFaIiBzdHJva2U9IiMzMzg1RkYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=";
export const genericWalletIcon =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjY2NjcgNC42NjY2N1YyLjY2NjY3QzEyLjY2NjcgMi40ODk4NiAxMi41OTY0IDIuMzIwMjkgMTIuNDcxNCAyLjE5NTI2QzEyLjM0NjQgMi4wNzAyNCAxMi4xNzY4IDIgMTIgMkgzLjMzMzMzQzIuOTc5NzEgMiAyLjY0MDU3IDIuMTQwNDggMi4zOTA1MiAyLjM5MDUyQzIuMTQwNDggMi42NDA1NyAyIDIuOTc5NzEgMiAzLjMzMzMzQzIgMy42ODY5NiAyLjE0MDQ4IDQuMDI2MDkgMi4zOTA1MiA0LjI3NjE0QzIuNjQwNTcgNC41MjYxOSAyLjk3OTcxIDQuNjY2NjcgMy4zMzMzMyA0LjY2NjY3SDEzLjMzMzNDMTMuNTEwMSA0LjY2NjY3IDEzLjY3OTcgNC43MzY5IDEzLjgwNDcgNC44NjE5M0MxMy45Mjk4IDQuOTg2OTUgMTQgNS4xNTY1MiAxNCA1LjMzMzMzVjhNMTQgOEgxMkMxMS42NDY0IDggMTEuMzA3MiA4LjE0MDQ4IDExLjA1NzIgOC4zOTA1MkMxMC44MDcxIDguNjQwNTcgMTAuNjY2NyA4Ljk3OTcxIDEwLjY2NjcgOS4zMzMzM0MxMC42NjY3IDkuNjg2OTYgMTAuODA3MSAxMC4wMjYxIDExLjA1NzIgMTAuMjc2MUMxMS4zMDcyIDEwLjUyNjIgMTEuNjQ2NCAxMC42NjY3IDEyIDEwLjY2NjdIMTRDMTQuMTc2OCAxMC42NjY3IDE0LjM0NjQgMTAuNTk2NCAxNC40NzE0IDEwLjQ3MTRDMTQuNTk2NCAxMC4zNDY0IDE0LjY2NjcgMTAuMTc2OCAxNC42NjY3IDEwVjguNjY2NjdDMTQuNjY2NyA4LjQ4OTg2IDE0LjU5NjQgOC4zMjAyOSAxNC40NzE0IDguMTk1MjZDMTQuMzQ2NCA4LjA3MDI0IDE0LjE3NjggOCAxNCA4WiIgc3Ryb2tlPSIjMzM4NUZGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTIgMy4zMzM1VjEyLjY2NjhDMiAxMy4wMjA1IDIuMTQwNDggMTMuMzU5NiAyLjM5MDUyIDEzLjYwOTZDMi42NDA1NyAxMy44NTk3IDIuOTc5NzEgMTQuMDAwMiAzLjMzMzMzIDE0LjAwMDJIMTMuMzMzM0MxMy41MTAxIDE0LjAwMDIgMTMuNjc5NyAxMy45Mjk5IDEzLjgwNDcgMTMuODA0OUMxMy45Mjk4IDEzLjY3OTkgMTQgMTMuNTEwMyAxNCAxMy4zMzM1VjEwLjY2NjgiIHN0cm9rZT0iIzMzODVGRiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=";
const passkeyIcon =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzU2MzlfMzIpIj4KPHBhdGggZD0iTTcuOTk5NTkgNi42NjY1QzcuNjQ1OTYgNi42NjY1IDcuMzA2ODMgNi44MDY5OCA3LjA1Njc4IDcuMDU3MDNDNi44MDY3MyA3LjMwNzA4IDYuNjY2MjUgNy42NDYyMiA2LjY2NjI1IDcuOTk5ODRDNi42NjYyNSA4LjY3OTg0IDYuNTk5NTkgOS42NzMxNyA2LjQ5MjkyIDEwLjY2NjUiIHN0cm9rZT0iIzMzODVGRiIgc3Ryb2tlLXdpZHRoPSIxLjI1NDkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNOS4zMzI5MyA4Ljc0NjU4QzkuMzMyOTMgMTAuMzMzMiA5LjMzMjkzIDEyLjk5OTkgOC42NjYyNiAxNC42NjY2IiBzdHJva2U9IiMzMzg1RkYiIHN0cm9rZS13aWR0aD0iMS4yNTQ5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTExLjUyNzMgMTQuMDEzM0MxMS42MDczIDEzLjYxMzMgMTEuODE0IDEyLjQ4IDExLjg2MDcgMTIiIHN0cm9rZT0iIzMzODVGRiIgc3Ryb2tlLXdpZHRoPSIxLjI1NDkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMS4zMzM5OCA4LjAwMDE2QzEuMzMzOTggNi42MDA5NSAxLjc3NDIzIDUuMjM3MiAyLjU5MjM3IDQuMTAyMDlDMy40MTA1MSAyLjk2Njk5IDQuNTY1MDUgMi4xMTgwOCA1Ljg5MjQ3IDEuNjc1NjFDNy4yMTk4OCAxLjIzMzE0IDguNjUyODYgMS4yMTk1NCA5Ljk4ODQ0IDEuNjM2NzRDMTEuMzI0IDIuMDUzOTQgMTIuNDk0NSAyLjg4MDc5IDEzLjMzNCA0LjAwMDE2IiBzdHJva2U9IiMzMzg1RkYiIHN0cm9rZS13aWR0aD0iMS4yNTQ5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTEuMzMzOTggMTAuNjY2NUgxLjMzOTE0IiBzdHJva2U9IiMzMzg1RkYiIHN0cm9rZS13aWR0aD0iMS4yNTQ5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTE0LjUzMjcgMTAuNjY2NUMxNC42NjYgOS4zMzMxNyAxNC42MiA3LjA5NzE3IDE0LjUzMjcgNi42NjY1IiBzdHJva2U9IiMzMzg1RkYiIHN0cm9rZS13aWR0aD0iMS4yNTQ5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTMuMzMzOTggMTIuOTk5OEMzLjY2NzMyIDExLjk5OTggNC4wMDA2NSA5Ljk5OTg0IDQuMDAwNjUgNy45OTk4NEMzLjk5OTk4IDcuNTQ1NzUgNC4wNzY2MyA3LjA5NDg2IDQuMjI3MzIgNi42NjY1IiBzdHJva2U9IiMzMzg1RkYiIHN0cm9rZS13aWR0aD0iMS4yNTQ5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTUuNzY3MDkgMTQuNjY2OEM1LjkwNzA5IDE0LjIyNjggNi4wNjcwOSAxMy43ODY4IDYuMTQ3MDkgMTMuMzMzNSIgc3Ryb2tlPSIjMzM4NUZGIiBzdHJva2Utd2lkdGg9IjEuMjU0OSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik02IDQuNTMzNDZDNi42MDgyNyA0LjE4MjI4IDcuMjk4MjggMy45OTc0NSA4LjAwMDY0IDMuOTk3NTZDOC43MDMwMSAzLjk5NzY3IDkuMzkyOTYgNC4xODI3MiAxMC4wMDExIDQuNTM0MUMxMC42MDkzIDQuODg1NDggMTEuMTE0MiA1LjM5MDc5IDExLjQ2NTEgNS45OTkyM0MxMS44MTYgNi42MDc2NiAxMi4wMDA1IDcuMjk3NzYgMTIgOC4wMDAxMlY5LjMzMzQ2IiBzdHJva2U9IiMzMzg1RkYiIHN0cm9rZS13aWR0aD0iMS4yNTQ5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF81NjM5XzMyIj4KPHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=";

export const socialIcons = {
  google: googleIconUri,
  apple: appleIconUri,
  coinbase: coinbaseIconUri,
  facebook: facebookIconUri,
  discord: discordIconUri,
  line: lineIconUri,
  x: xIcon,
  farcaster: farcasterIconUri,
  telegram: telegramIconUri,
  twitch: twitchIconUri,
  github: githubIconUri,
};

// TODO: this should return actual <svg> elements so they can be themed
export function getSocialIcon(provider: AuthOption | ({} & string)) {
  switch (provider) {
    case "google":
      return googleIconUri;
    case "coinbase":
      return coinbaseIconUri;
    case "apple":
      return appleIconUri;
    case "facebook":
      return facebookIconUri;
    case "phone":
      return phoneIcon;
    case "email":
      return emailIcon;
    case "passkey":
      return passkeyIcon;
    case "discord":
      return discordIconUri;
    case "line":
      return lineIconUri;
    case "x":
      return xIcon;
    case "farcaster":
      return farcasterIconUri;
    case "telegram":
      return telegramIconUri;
    case "twitch":
      return twitchIconUri;
    case "github":
      return githubIconUri;
    case "guest":
      return guestIcon;
    default:
      return genericWalletIcon;
  }
}
