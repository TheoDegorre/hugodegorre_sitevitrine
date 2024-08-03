create table user (
    id int primary key auto_increment not null,
    firstname VARCHAR(55) NOT NULL,
    lastname VARCHAR(55) NOT NULL,
    email VARCHAR(80) NOT NULL UNIQUE,
    password VARCHAR(250) NOT NULL,
    url_photo VARCHAR(80) NULL,
    is_admin BOOL NOT NULL DEFAULT 0
);

create table project (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    url_photo VARCHAR(55) NOT NULL,
    title VARCHAR(55) NOT NULL,
    description TEXT NOT NULL,
    url_record VARCHAR(250) NULL,
    url_video VARCHAR(250) NULL,
    user_id int not null,
    FOREIGN KEY (user_id) REFERENCES user (id)
);

create table event (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    title VARCHAR(55) NOT NULL,
    begin_date DATE NOT NULL,
    end_date DATE NOT NULL,
    city VARCHAR(50) NOT NULL,
    description TEXT NOT NULL,
    user_id int not null,
    FOREIGN KEY (user_id) REFERENCES user (id)
);

create table directory (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    composer VARCHAR(55) NOT NULL,
    title VARCHAR(80) NOT NULL,
    category VARCHAR(55) NOT NULL,
    instrumentation VARCHAR(55) NOT NULL,
    user_id int not null,
    FOREIGN KEY (user_id) REFERENCES user (id)
);

-- insertion de données de bases

-- user
INSERT INTO
    user (
        firstname,
        lastname,
        email,
        password,
        url_photo,
        is_admin
    )
VALUES (
        'Admin',
        'Admin',
        'admin.admin@gmail.com',
        'Admin@12434',
        'http://example.com/photos/alice.jpg',
        TRUE
    ),
    (
        'Hugo',
        'Degorre',
        'degorreh@gmail.com',
        'hugo@Password1',
        'http://example.com/photos/eva.jpg',
        FALSE
    );

-- project

INSERT INTO
    project (
        title,
        url_photo,
        description,
        url_record,
        url_video,
        user_id
    )
VALUES (
        'Les Espaces Et Les Figures ',
        '/uploads/project/projet1.jpg',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dui ante, dapibus sed est laoreet, venenatis ornare orci. Vivamus aliquet justo diam, et molestie nisl pretium quis. Fusce eget augue ac sapien blandit finibus eu sed nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus congue nec libero eu ultricies. Vestibulum eu tristique ex. Vivamus vulputate tortor vitae dolor facilisis tempor. Aenean mauris tortor, tincidunt nec leo nec, euismod eleifend enim. Mauris nec est velit. Integer a massa nulla. Duis eu ligula metus. Phasellus luctus tortor ut efficitur volutpat. Sed eros dui, iaculis non est quis, condimentum accumsan tortor.
Cras nisl neque, maximus at rhoncus at, tempus quis risus. Maecenas sed tincidunt ipsum. Praesent id arcu at lectus blandit elementum. Duis ac auctor enim, ac varius dolor. Sed gravida nisl vitae venenatis aliquet. Donec rutrum ut elit sit amet ornare. Donec sit amet nunc id tellus tincidunt ultrices ac et dui. Morbi eu lorem sit amet ipsum rhoncus vulputate eu id velit. Maecenas pretium quam nec metus mattis, ut dignissim ex placerat. Integer enim metus, pharetra et enim in, aliquam vestibulum ipsum. Vestibulum semper ullamcorper est, et bibendum neque commodo id. Sed sit amet nisl orci. Sed porta ac sapien id consectetur. Vivamus ac eleifend dolor.
Aenean molestie congue arcu, vel rutrum tortor dictum sed. Quisque sodales venenatis nulla, vitae eleifend ligula malesuada nec. Integer mattis massa eros, nec sagittis nulla fringilla vel. Nunc nisl enim, commodo in porta nec, volutpat sed odio. Sed mollis feugiat libero, eget pellentesque orci fringilla eu. Maecenas efficitur vulputate elit, eu aliquam magna. Cras arcu mi, porta eu lacus vitae, placerat finibus nunc. Etiam non feugiat enim, in dapibus eros. Praesent et metus quis mauris gravida dignissim.',
        '/uploads/audio/Ona_Poison.mp3',
        '',
        1
    ),
    (
        'Neuf Sur Cinq, pour ensemble (2018)',
        '/uploads/project/projet2.jpg',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dui ante, dapibus sed est laoreet, venenatis ornare orci. Vivamus aliquet justo diam, et molestie nisl pretium quis. Fusce eget augue ac sapien blandit finibus eu sed nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus congue nec libero eu ultricies. Vestibulum eu tristique ex. Vivamus vulputate tortor vitae dolor facilisis tempor. Aenean mauris tortor, tincidunt nec leo nec, euismod eleifend enim. Mauris nec est velit. Integer a massa nulla. Duis eu ligula metus. Phasellus luctus tortor ut efficitur volutpat. Sed eros dui, iaculis non est quis, condimentum accumsan tortor.
Cras nisl neque, maximus at rhoncus at, tempus quis risus. Maecenas sed tincidunt ipsum. Praesent id arcu at lectus blandit elementum. Duis ac auctor enim, ac varius dolor. Sed gravida nisl vitae venenatis aliquet. Donec rutrum ut elit sit amet ornare. Donec sit amet nunc id tellus tincidunt ultrices ac et dui. Morbi eu lorem sit amet ipsum rhoncus vulputate eu id velit. Maecenas pretium quam nec metus mattis, ut dignissim ex placerat. Integer enim metus, pharetra et enim in, aliquam vestibulum ipsum. Vestibulum semper ullamcorper est, et bibendum neque commodo id. Sed sit amet nisl orci. Sed porta ac sapien id consectetur. Vivamus ac eleifend dolor.
Aenean molestie congue arcu, vel rutrum tortor dictum sed. Quisque sodales venenatis nulla, vitae eleifend ligula malesuada nec. Integer mattis massa eros, nec sagittis nulla fringilla vel. Nunc nisl enim, commodo in porta nec, volutpat sed odio. Sed mollis feugiat libero, eget pellentesque orci fringilla eu. Maecenas efficitur vulputate elit, eu aliquam magna. Cras arcu mi, porta eu lacus vitae, placerat finibus nunc. Etiam non feugiat enim, in dapibus eros. Praesent et metus quis mauris gravida dignissim.',
        '/uploads/audio/Myuu-TenderRemains.mp3',
        '',
        1
    ),
    (
        'zOOm',
        '/uploads/project/projet3.jpg',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dui ante, dapibus sed est laoreet, venenatis ornare orci. Vivamus aliquet justo diam, et molestie nisl pretium quis. Fusce eget augue ac sapien blandit finibus eu sed nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus congue nec libero eu ultricies. Vestibulum eu tristique ex. Vivamus vulputate tortor vitae dolor facilisis tempor. Aenean mauris tortor, tincidunt nec leo nec, euismod eleifend enim. Mauris nec est velit. Integer a massa nulla. Duis eu ligula metus. Phasellus luctus tortor ut efficitur volutpat. Sed eros dui, iaculis non est quis, condimentum accumsan tortor.
Cras nisl neque, maximus at rhoncus at, tempus quis risus. Maecenas sed tincidunt ipsum. Praesent id arcu at lectus blandit elementum. Duis ac auctor enim, ac varius dolor. Sed gravida nisl vitae venenatis aliquet. Donec rutrum ut elit sit amet ornare. Donec sit amet nunc id tellus tincidunt ultrices ac et dui. Morbi eu lorem sit amet ipsum rhoncus vulputate eu id velit. Maecenas pretium quam nec metus mattis, ut dignissim ex placerat. Integer enim metus, pharetra et enim in, aliquam vestibulum ipsum. Vestibulum semper ullamcorper est, et bibendum neque commodo id. Sed sit amet nisl orci. Sed porta ac sapien id consectetur. Vivamus ac eleifend dolor.
Aenean molestie congue arcu, vel rutrum tortor dictum sed. Quisque sodales venenatis nulla, vitae eleifend ligula malesuada nec. Integer mattis massa eros, nec sagittis nulla fringilla vel. Nunc nisl enim, commodo in porta nec, volutpat sed odio. Sed mollis feugiat libero, eget pellentesque orci fringilla eu. Maecenas efficitur vulputate elit, eu aliquam magna. Cras arcu mi, porta eu lacus vitae, placerat finibus nunc. Etiam non feugiat enim, in dapibus eros. Praesent et metus quis mauris gravida dignissim.',
        '/uploads/audio/Meydn-SynthwaveVibe.mp3',
        '',
        1
    );

    -- event

INSERT INTO
    event (
        title,
        begin_date,
        end_date,
        city,
        description,
        user_id
    )
VALUES (
        'Les Espaces Et Les Figures',
        '2023/10/10',
        '2023/10/12',
        'Karlsruhe',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dui ante, dapibus sed est laoreet, venenatis ornare orci. Vivamus aliquet justo diam, et molestie nisl pretium quis. Fusce eget augue ac sapien blandit finibus eu sed nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus congue nec libero eu ultricies. Vestibulum eu tristique ex. Vivamus vulputate tortor vitae dolor facilisis tempor. Aenean mauris tortor, tincidunt nec leo nec, euismod eleifend enim. Mauris nec est velit. Integer a massa nulla. Duis eu ligula metus. Phasellus luctus tortor ut efficitur volutpat. Sed eros dui, iaculis non est quis, condimentum accumsan tortor.
Cras nisl neque, maximus at rhoncus at, tempus quis risus. Maecenas sed tincidunt ipsum. Praesent id arcu at lectus blandit elementum. Duis ac auctor enim, ac varius dolor. Sed gravida nisl vitae venenatis aliquet. Donec rutrum ut elit sit amet ornare. Donec sit amet nunc id tellus tincidunt ultrices ac et dui. Morbi eu lorem sit amet ipsum rhoncus vulputate eu id velit. Maecenas pretium quam nec metus mattis, ut dignissim ex placerat. Integer enim metus, pharetra et enim in, aliquam vestibulum ipsum. Vestibulum semper ullamcorper est, et bibendum neque commodo id. Sed sit amet nisl orci. Sed porta ac sapien id consectetur. Vivamus ac eleifend dolor.
Aenean molestie congue arcu, vel rutrum tortor dictum sed. Quisque sodales venenatis nulla, vitae eleifend ligula malesuada nec. Integer mattis massa eros, nec sagittis nulla fringilla vel. Nunc nisl enim, commodo in porta nec, volutpat sed odio. Sed mollis feugiat libero, eget pellentesque orci fringilla eu. Maecenas efficitur vulputate elit, eu aliquam magna. Cras arcu mi, porta eu lacus vitae, placerat finibus nunc. Etiam non feugiat enim, in dapibus eros. Praesent et metus quis mauris gravida dignissim.',
        1
    ),
    (
        'Neuf Sur Cinq, pour ensemble (2018)',
        '2022/03/05',
        '2022/03/05',
        'Strasbourg',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dui ante, dapibus sed est laoreet, venenatis ornare orci. Vivamus aliquet justo diam, et molestie nisl pretium quis. Fusce eget augue ac sapien blandit finibus eu sed nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus congue nec libero eu ultricies. Vestibulum eu tristique ex. Vivamus vulputate tortor vitae dolor facilisis tempor. Aenean mauris tortor, tincidunt nec leo nec, euismod eleifend enim. Mauris nec est velit. Integer a massa nulla. Duis eu ligula metus. Phasellus luctus tortor ut efficitur volutpat. Sed eros dui, iaculis non est quis, condimentum accumsan tortor.
Cras nisl neque, maximus at rhoncus at, tempus quis risus. Maecenas sed tincidunt ipsum. Praesent id arcu at lectus blandit elementum. Duis ac auctor enim, ac varius dolor. Sed gravida nisl vitae venenatis aliquet. Donec rutrum ut elit sit amet ornare. Donec sit amet nunc id tellus tincidunt ultrices ac et dui. Morbi eu lorem sit amet ipsum rhoncus vulputate eu id velit. Maecenas pretium quam nec metus mattis, ut dignissim ex placerat. Integer enim metus, pharetra et enim in, aliquam vestibulum ipsum. Vestibulum semper ullamcorper est, et bibendum neque commodo id. Sed sit amet nisl orci. Sed porta ac sapien id consectetur. Vivamus ac eleifend dolor.
Aenean molestie congue arcu, vel rutrum tortor dictum sed. Quisque sodales venenatis nulla, vitae eleifend ligula malesuada nec. Integer mattis massa eros, nec sagittis nulla fringilla vel. Nunc nisl enim, commodo in porta nec, volutpat sed odio. Sed mollis feugiat libero, eget pellentesque orci fringilla eu. Maecenas efficitur vulputate elit, eu aliquam magna. Cras arcu mi, porta eu lacus vitae, placerat finibus nunc. Etiam non feugiat enim, in dapibus eros. Praesent et metus quis mauris gravida dignissim.',
        1
    ),
    (
        'zOOm',
        '2023/09/07',
        '2023/07/12',
        'Colmar',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dui ante, dapibus sed est laoreet, venenatis ornare orci. Vivamus aliquet justo diam, et molestie nisl pretium quis. Fusce eget augue ac sapien blandit finibus eu sed nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus congue nec libero eu ultricies. Vestibulum eu tristique ex. Vivamus vulputate tortor vitae dolor facilisis tempor. Aenean mauris tortor, tincidunt nec leo nec, euismod eleifend enim. Mauris nec est velit. Integer a massa nulla. Duis eu ligula metus. Phasellus luctus tortor ut efficitur volutpat. Sed eros dui, iaculis non est quis, condimentum accumsan tortor.
Cras nisl neque, maximus at rhoncus at, tempus quis risus. Maecenas sed tincidunt ipsum. Praesent id arcu at lectus blandit elementum. Duis ac auctor enim, ac varius dolor. Sed gravida nisl vitae venenatis aliquet. Donec rutrum ut elit sit amet ornare. Donec sit amet nunc id tellus tincidunt ultrices ac et dui. Morbi eu lorem sit amet ipsum rhoncus vulputate eu id velit. Maecenas pretium quam nec metus mattis, ut dignissim ex placerat. Integer enim metus, pharetra et enim in, aliquam vestibulum ipsum. Vestibulum semper ullamcorper est, et bibendum neque commodo id. Sed sit amet nisl orci. Sed porta ac sapien id consectetur. Vivamus ac eleifend dolor.
Aenean molestie congue arcu, vel rutrum tortor dictum sed. Quisque sodales venenatis nulla, vitae eleifend ligula malesuada nec. Integer mattis massa eros, nec sagittis nulla fringilla vel. Nunc nisl enim, commodo in porta nec, volutpat sed odio. Sed mollis feugiat libero, eget pellentesque orci fringilla eu. Maecenas efficitur vulputate elit, eu aliquam magna. Cras arcu mi, porta eu lacus vitae, placerat finibus nunc. Etiam non feugiat enim, in dapibus eros. Praesent et metus quis mauris gravida dignissim.',
        1
    );
    -- directory
INSERT INTO
    directory (
        composer,
        title,
        category,
        instrumentation,
        user_id
    )
VALUES (
        'AJAX, Henrik',
        'Phantasien, pour accordéon',
        'Musique de chambre',
        'ACC,TRP,FLT,VLC,CLT',
        1
    ),
    (
        'BACH, Jean-Sébastien',
        'Concerto after Marcello in c min BWV 981',
        'Solo',
        'ACC',
        1
    ),
    (
        'TCHAIKOVSKI, Piotr',
        'Les Saisons – Août',
        'Solo',
        'ACC',
        1
    ),
    (
        'SCHMIDT, Ole',
        'Symphonic Fantasy and Allegro op. 20 (1958)',
        'Concerto',
        'ACC,ORCH',
        1
    );