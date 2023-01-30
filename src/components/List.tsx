import { Sub } from "../types";

interface Props {
    subs: Array<Sub>
}

const List = ({ subs }: Props) => {
    return (
        <ul>
            {subs.map(sub => {
                return (
                    <li key={sub.nick}>
                        <img src={sub.avatar} alt={`Avatar for ${sub.nick}`}></img>
                        <h4>{sub.nick} (<small>
                            {sub.subMonths}</small>)</h4>
                        <p>{sub.description}</p>
                    </li>
                )
            })}
        </ul>
    )
}

export default List;