import json
import numpy as np

with open("traces.out", "r") as f:
    data = json.load(f)

traces = np.array(data["traces"])
labels = np.array(data["labels"])

print("Labels found:", set(labels))
print()

google_traces = traces[labels == "https://www.google.com"]
nytimes_traces = traces[labels == "https://www.nytimes.com"]

print("=== GOOGLE ===")
print("Mean:", google_traces.mean())
print("Median:", np.median(google_traces))
print("Std:", google_traces.std())
print("Min:", google_traces.min())
print("Max:", google_traces.max())
print()

print("=== NYTIMES ===")
print("Mean:", nytimes_traces.mean())
print("Median:", np.median(nytimes_traces))
print("Std:", nytimes_traces.std())
print("Min:", nytimes_traces.min())
print("Max:", nytimes_traces.max())