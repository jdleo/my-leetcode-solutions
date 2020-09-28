# for mutex
from threading import Lock


class Foo:
    def __init__(self):
        # shared mutex objects
        self.mutex1 = Lock()
        self.mutex2 = Lock()
        self.mutex1.acquire()
        self.mutex2.acquire()

    def first(self, printFirst: 'Callable[[], None]') -> None:
        # printFirst() outputs "first". Do not change or remove this line.
        printFirst()
        # release mutex 1 lock
        self.mutex1.release()

    def second(self, printSecond: 'Callable[[], None]') -> None:

        # wait for first mutex to be released
        with self.mutex1:
            printSecond()
        # release mutex 2 lock
        self.mutex2.release()

    def third(self, printThird: 'Callable[[], None]') -> None:

        # wait for second mutex to be released
        with self.mutex2:
            printThird()
