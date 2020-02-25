import sale_movies from '../models/sale_movies';

export async function get_sale_movies(req, res){
    const list_sale_movies = await sale_movies.findAll();
    try{
        res.json({
        data: list_sale_movies
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

//Function to create a sale movie
export async function create_sale_movie(req, res){
    try{
        const { date_sale, units , id_movie, id_user } = req.body;
        let new_sale_movie = await sale_movies.create({
            date_sale,
            units,
            id_movie,
            id_user
        },{
            fields: ['date_sale', 'units', 'id_movie', 'id_user']
        });
        if (new_sale_movie){
            return res.json({
                message: 'Sale movie created successfully',
                data: new_sale_movie
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

//Function to get a sale movie 
export async function get_one_sale_movie(req, res){
    try{
        const { id } = req.params;
        const sale_movie = await sale_movies.findOne({
            where: {
                id
            }
        });
        res.json({
            data: sale_movie
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

//Function to delete sale movies
export async function delete_sale_movie(req, res){
    try{
        const { id } = req.params;
        const delete_row_count = await sale_movies.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'sale Movie deleted successfully',
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

//Function to update sale movies
export async function update_sale_movies(req, res){
    const { id } = req.params;
    const { rental_price, sale_price, id_movie } = req.body;

    const list_rent_movies = await rent_movies.findAll({
        attributes: ['date_rental','date_return','id_movie','id_user'],
        where:{
            id
        }
    });
    if (list_rent_movies.length >0 ){
        list_rent_movies.forEach(async rent_movies => {
            await rent_movies.update({
                date_rental,
                date_return,
                id_movie,
                id_user
            });
        })
    }

    return res.json({
        message: 'Rent Movie updated successfully',
        data: list_rent_movies
    });
}