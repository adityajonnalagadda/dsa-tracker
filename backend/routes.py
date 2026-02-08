from fastapi import APIRouter
from models import Problem
from database import collection
from bson import ObjectId

router = APIRouter()

@router.post("/problems")
def add_problem(problem: Problem):
    collection.insert_one(problem.dict())
    return {"message": "Problem added"}

@router.get("/problems")
def get_problems():
    problems = []
    for p in collection.find():
        p["_id"] = str(p["_id"])
        problems.append(p)
    return problems

@router.put("/problems/{id}")
def update_problem(id: str, problem: Problem):
    collection.update_one(
        {"_id": ObjectId(id)},
        {"$set": problem.dict()}
    )
    return {"message": "Problem updated"}

@router.delete("/problems/{id}")
def delete_problem(id: str):
    collection.delete_one({"_id": ObjectId(id)})
    return {"message": "Problem deleted"}
