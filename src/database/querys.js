export const queries ={
    getAllProducts:'SELECT * FROM products',
    addNewProducts:'INSERT INTO Products (name,description,quantity) VALUES(@name,@description,@quantity)',
    getProductById:'SELECT * FROM Products where Id=@Id',
    deleteProduct:'DELETE FROM [webDbb].[dbo].[Products] WHERE Id=@Id',
    getTotalProduct:'SELECT COUNT(*) FROM products',
    updateProductsById:
    'UPDATE [webDbb].[dbo].[Products] SET name=@name, description=@description, quantity=@quantity WHERE Id=@Id',
    
}