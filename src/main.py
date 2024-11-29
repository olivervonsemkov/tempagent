from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Agent Stage LLM Service"}

@app.post("/predict")
async def predict(text: str):
    return {"input": text, "prediction": f"Processed: {text}"}