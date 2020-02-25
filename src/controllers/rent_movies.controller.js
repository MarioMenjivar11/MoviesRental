import rent_movies from '../models/rent_movies';

export async function get_rent_movies(req, res){
    const list_rent_movies = await rent_movies.findAll();
    try{
        res.json({
        data: list_rent_movies
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
export async function create_rent_movie(req, res){
    try{
        const { date_rental, date_return , id_movie, id_user } = req.body;
        let new_rent_movie = await rent_movies.create({
            date_rental,
            date_return,
            id_movie,
            id_user
        },{
            fields: ['date_rental', 'date_return', 'id_movie', 'id_user']
        });
        if (new_rent_movie){
            return res.json({
                message: 'Rental movie created successfully',
                data: new_rental_movie
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

//Function to get a rent movie 
export async function get_one_rent_movie(req, res){
    try{
        const { id } = req.params;
        const rent_movie = await rent_movies.findOne({
            where: {
                id
            }
        });
        res.json({
            data: rent_movie
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

//Function to delete rent movies
export async function delete_rent_movie(req, res){
    try{
        const { id } = req.params;
        const delete_row_count = await rent_movies.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'rent Movie deleted successfully',
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

//Function to update rent movies
export async function update_rent_movies(req, res){
    const { id } = req.params;
    const { date_rental, date_return, id_movie, id_user } = req.body;

    const list_rent_movies = await rent_movies.findAll({
        attributes: ['id','date_rental','date_return','id_movie','id_user'],
        where:{
            id
        }
    });
    if (list_rent_movies.length >0 ){
        list_rent_movies.forEach(async rent_movies => {
            await rent_movies.update({
                id,
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