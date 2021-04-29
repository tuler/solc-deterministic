# Exported artifact non-deterministic

Run:

- `git checkout new-contract`
- `yarn export`

See that the `/export/artifacts/HelloWorld.json` is modified, even though I just added a `HelloMary.sol` contract.

