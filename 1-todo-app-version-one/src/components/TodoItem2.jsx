function TodoItem2() {

    let todoName = 'Go To College';
        
    let todoDate = '04/10/2025';
        

    return (
        <div class="container">

            <div class="row our-row">
                <div class="col-6">
                    {todoName}
                </div>
                <div class="col-4">
                    {todoDate}
                </div>
                <div class="col-2">
                    <button type="button" class="btn btn-danger our-btn">DELETE</button>
                </div>
            </div>
        </div>
    )
}

export default TodoItem2;