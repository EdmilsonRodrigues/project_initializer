import eel
from config import VERSION


eel.init("web")

session = {}


@eel.expose
def get_version() -> str:
    return VERSION


@eel.expose
def health() -> str:
    return "OK"


if __name__ == "__main__":
    try:
        eel.start("watcher.html", size=(1000, 1200))
    except Exception as e:
        print(e)
    finally:
        pass
