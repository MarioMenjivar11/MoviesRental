import users from '../models/users';

export async function get_users(req, res){
    const list_users = await users.findAll();
    try{
        res.json({
        data: list_users
        });
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });    
    } 
};

//Function to create a user
export async function create_user(req, res){
    try{
        const { first_name, last_name, date_of_birth, email, login, password, id_type } = req.body;
        let new_user = await users.create({
            first_name,
            last_name,
            date_of_birth,
            email,
            login, 
            password,
            id_type
        },{
            fields: ['first_name', 'last_name', 'date_of_birth', 'email', 'login', 'password', 'id_type']
        });
        if (new_user){
            return res.json({
                message: 'User created successfully',
                data: new_user
            });
        }
    }
    catch(error) {
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
};

//Function to get a users 
export async function get_one_user(req, res){
    try{
        const { id } = req.params;
        const user = await users.findOne({
            where: {
                id
            }
        });
        res.json({
            data: user
        });
    }
    catch(error) {
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
};

//Function to delete users
export async function delete_user(req, res){
    try{
        const { id } = req.params;
        const delete_row_count = await users.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'User deleted successfully',
            count: delete_row_count
        });
    }
    catch(error) {
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
};

//Function to update users
export async function update_users(req, res){
    const { id } = req.params;
    const { first_name, last_name, date_of_birth, email, login, password, id_type } = req.body;

    const list_users = await users.findAll({
        attributes: [ 'id','first_name','last_name','date_of_birth','email','login', 'password','id_type' ],
        where:{
            id
        }
    });
    if (list_users.length >0 ){
        list_users.forEach(async users => {
            await users.update({
                id,
                first_name,
                last_name,
                date_of_birth,
                email,
                login,
                password,
                id_type
            });
        })
    }

    return res.json({
        message: 'User updated successfully',
        data: list_users 
    })

}