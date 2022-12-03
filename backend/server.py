from typing import Union
from fastapi import FastAPI
from pydantic import BaseModel
import subprocess ##To run python files
from fastapi.middleware.cors import CORSMiddleware # CORS needed for dev purposes
# import os

app = FastAPI()

#cors:
origins = [
    "http://localhost",
    "http://localhost:5173",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"server": "running"}

@app.put("/argument/")
def update_item( argument: str):
    # subprocess.call("python3 yourfile.py '"+argument+"'", shell=True)
    return {"argument": argument}