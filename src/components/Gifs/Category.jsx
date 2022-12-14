import { Link } from "wouter";

export default function Category({name, options= []}){
    return (
        <div className="category">
            <h3 className="category-title">{name}</h3>
            <ul className="category-list">
                {
                    options.map((singleOption)=>(
                        <li key={singleOption}>
                            <Link className="category-link" to={`/search/${singleOption}`}>{singleOption}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}