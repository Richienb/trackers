import test from "ava"
import is from "@sindresorhus/is"
import trackers from "./trackers_all.json"

test("main", (t) => {
    t.true(is.array(trackers))
})
