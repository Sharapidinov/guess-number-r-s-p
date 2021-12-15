

const Card = ({user}) => {
    return (
        <>
            <div key={user.id} className="col-4">
                <img width={300} height={200} src={user.image} alt=""/>
                <h4>{user.title}</h4>
                <div>Price: {user.price}$</div>
                <div className="subtitle">Description: {user.description}</div>
                <div>In stock: {user.inStock ? "Вналичии": "Нету в наличии" }</div>

            </div>
        </>
    )
}
export default Card