import PropTypes from 'prop-types';

function CartItem({ item, onRemove, onQuantityChange }) {
    const handleChange = (e) => {
        onQuantityChange(item.id, parseInt(e.target.value, 10));
    };

    

    return (
        <div className="flex items-center space-x-4">
            <img src={item.image} alt={item.title} className="w-20 h-20 object-cover" />
            <div>
                <h2 className="text-lg">{item.title}</h2>
                <p>${item.price}</p>
                
                <input 
                    type="number" 
                    value={item.quantity} 
                    onChange={handleChange} 
                    className="border p-1 w-16 text-center" 
                    min="1"
                />
                <button 
                    onClick={() => onRemove(item.id)} 
                    className="text-red-500"
                >
                    Remove
                </button>
            </div>
        </div>
    );
}

CartItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
    }).isRequired,
    onRemove: PropTypes.func.isRequired,
    onQuantityChange: PropTypes.func.isRequired,
};

export default CartItem;
