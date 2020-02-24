import movies from '../models/movies';

export async function get_movies(req, res){
    const list_movies = await movies.findAll();
    try{
        res.json({
        data: list_movies
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

//Function to create a movie
export async function create_movie(req, res){
    try{
        const { title, description, stock, rental_price, sale_price, id_availability } = req.body;
        let new_movie = await movies.create({
            title,
            description,
            stock,
            rental_price,
            sale_price,
            id_availability
        },{
            fields: ['title', 'description', 'stock', 'rental_price', 'sale_price', 'id_availability']
        });
        if (new_movie){
            return res.json({
                message: 'Project created successfully',
                data: new_movie
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

//Function to get a movie 
export async function get_one_movie(req, res){
    try{
        const { id } = req.params;
        const movie = await movies.findOne({
            where: {
                id
            }
        });
        res.json({
            data: movie
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

//Function to delete movies
export async function delete_movie(req, res){
    try{
        const { id } = req.params;
        const delete_row_count = await movies.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'Movie deleted successfully',
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

//Function to update movies
export async function update_movies(req, res){
    const { id } = req.params;
    const { title, description, stock, rental_price, sale_price, id_availability } = req.body;

    const list_movies = await movies.findAll({
        attributes: ['id', 'title','description','stock','rental_price','sale_price','id_availability'],
        where:{
            id
        }
    });
    if (list_movies.length >0 ){
        list_movies.forEach(async movies => {
            await movies.update({
                title,
                description,
                stock,
                rental_price,
                sale_price,
                id_availability
            });
        })
    }

    return res.json({
        message: 'Movie updated successfully',
        data: list_movies
    })

}