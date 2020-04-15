# import threading event
from threading import Event


class Foo:
    def __init__(self):
        # events for threads
        self.e1 = Event()
        self.e2 = Event()

    def first(self, printFirst: 'Callable[[], None]') -> None:
        # print as normal
        printFirst()
        # notify
        self.e1.set()

    def second(self, printSecond: 'Callable[[], None]') -> None:
        # wait for event 1
        self.e1.wait()
        # print
        printSecond()
        # notify
        self.e2.set()

    def third(self, printThird: 'Callable[[], None]') -> None:
        # wait for event 2
        self.e2.wait()
        # print
        printThird()
