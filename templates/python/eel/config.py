import os
from dotenv import load_dotenv

if os.path.exists(".env"):
    load_dotenv(".env")


VERSION = "0.1.0"


def write_env(key, value):
    with open(".env", "r") as f:
        lines = f.readlines()
    done = False
    with open(".env", "w") as f:
        for line in lines:
            if line.startswith(key):
                f.write(f"{key}={value}\n")
                done = True
            else:
                f.write(line)
        if not done:
            f.write(f"{key}={value}\n")
