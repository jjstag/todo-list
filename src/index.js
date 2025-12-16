import "./styles.css";
import { differenceInDays } from "date-fns";

class todo {
    constructor (title, description, dueDate, priority, notes) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
    }

    get timeLeft() {
        const currentDate = new Date()
        const difference = differenceInDays(
            this.dueDate,
            currentDate,
        )
        return difference
    }
}



const party = new todo("Birthday Party", "Bob's birthday party", new Date(2025, 11, 25), 1, "")
console.log(party.timeLeft)