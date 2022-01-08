import './ExpenseItem.css'

function ExpenseItem(props) {
    return (
        <div className='expenseItem'>
            <div className='Item-date'>{props.Date}</div>
            <div className='Item-title'>{props.Title}</div>
            <div className='Item-price'>${props.Price}</div>
        </div>
    );
};

export default ExpenseItem;