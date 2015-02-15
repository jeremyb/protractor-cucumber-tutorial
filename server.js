var jsonServer = require('json-server');

var resources = {
    catalog: [
        {
            id: 1,
            title: 'RESTful APIs in the Real World Episode 1',
            previewImage: '/imagine/course_new/uploads/screencast/577cd2b4e6fb64844bdcebdb8ff6602dd56d0503/rest.png',
            duration: '1h:45m',
            price: 11.00,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, atque autem deserunt eaque eveniet, expedita facere fugiat laboriosam laborum minima officiis omnis quibusdam quis repellat repudiandae tempora, tenetur. Ex, saepe.'
        },
        {
            id: 2,
            title: 'OAuth2 in 8 Steps',
            previewImage: '/imagine/course_new/uploads/screencast/f629483711f17e0bb88d6fcc0a72431872e33673/oauth.png',
            duration: '1h:33m',
            price: 12.00,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur consequuntur cupiditate dolorum error molestiae pariatur reprehenderit. Dolorem esse est fuga, illum iure iusto nam repellat repudiandae soluta tempora vel, vero.'
        },
        {
            id: 3,
            title: 'Twig Templating for Friendly Frontend Devs',
            previewImage: '/imagine/course_new/uploads/screencast/bc800c5e3ee6bb5d4d98ccf5593da47a13e18e97/twig.png',
            duration: '41m:18s',
            price: 9.00,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consectetur dignissimos esse exercitationem harum hic illo inventore, laboriosam magnam minus obcaecati, quasi quis quod sunt suscipit vitae voluptates! Consectetur, culpa?'
        }
    ]
};

var router = jsonServer.router(resources);
var server = jsonServer.create();

server.use(router);
server.listen(3000);
