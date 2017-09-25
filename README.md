KISS - Developer & Designer Resume Template
===========================================

KISS is a responsive and elegant typography based resume bootstrap template crafted specially for designers, developer and those between the two. It comes with features that designers and developers will love.

## Features ##
 1. Typography based
 2. Good vertical and horizontal rhythm
 3. Seven unique color schemes
 4. Comes with a maximum and fluid width mode for each color scheme.
 5. 100% responsive for each mode.
 6. Scrollspy navigation for easily recognizing which resume section you are viewing and for easy navigation.
 7. Prominent resume profile section featuring the user profile images, contact and social information.
 8. Distinguish resume info with clear separations between the different sections.
 9. Introduction section.
 10. Education section
 11. Experience section
 12. Tools and Technologies section
 13. Skills section.
 14. Technical Writing Samples section.
 15. Work Case Studies section
 16. Hobbies and Interests section.
 17. Awards section.
 
Features That Designers and Developers Will Love
-------------
 1. Good documentation.
 2. Sass files included
 3. Easy to read html, scss and javascript files.
 4. It comes with minified css and javascript assets out of the box to you can start using it right away.
 5. Uses npm packages for bootstrap, jQuery and the excellent Laravel elixir to run gulp tasks.
 6. Uses browserify for Javascript assets includes and concatenation.

## Credits ##

 - [Bootstrap](http://getbootstrap.com/) (Sass Version)
 - [Jquery](https://jquery.com/)
 - [Laravel Elixir](https://laravel.com/docs/5.3/elixir)
 - [placehold.it](http://placehold.it/)
 - [Google Web Fonts](https://fonts.google.com/)

## Photos ##
All the photos in the theme except the ones from [placehold.it](http://placehold.it/) were original shot by Lamin Barrow (Theme Author)

## Free Support and Lifetime Updates ##
You can technical support based on the features and area of concern for this theme for free in the comments sections or by contacting Lamin Barrow at [https://wrapbootstrap.com/user/laminbarrow](https://wrapbootstrap.com/user/laminbarrow). Life time theme updates are also available to you for free after you purchase this theme at [https://wrapbootstrap.com/support/download-resender](https://wrapbootstrap.com/support/download-resender).

## How To Run The Theme and Make Changes##
The theme is ready to run out of the box but you'll need to go through the following steps in you want to make you down custom changes to it.

----------
**Dependences**

 1. [NodeJS](https://nodejs.org) and NPM
 2. [Gulp](http://gulpjs.com/)

**Installation & Setup**
After downloading and installing nodejs, confirm that it is added to your path by running the follow commands in your terminal or command prompt

    node -v
    npm -v

Next, installing the gulp task running by running the following command

    npm install --global gulp-cli
Next, change into the directory where you extracted your theme files from your terminal or command prompt 
eg:

    cd /path/to-the-folder/where-you-extracted/the-theme-files

and run the following command

    npm install
to to install the project dependencies.

## How to make changes to the CSS Files ##
The theme uses the SASS version of bootstrap and all of the SASS files are stored in the "src/sass" folder. It helps to have prior knowledge of what SASS is and how SASS/SCSS work so please refer to the SASS documentation for more information on SASS at [http://sass-lang.com/](http://sass-lang.com/).

To run the SASS compilation process, change into the theme root folder and run

    npm run dev

The command above will launch a gulp process that will compile your "src/sass" files into the "dist/css" folder. Most of the common settings used across the theme file are store in the "_setting.scs" sass partial file. Once your are finished making and are confident about putting your code into production please run the following command.

    npm run prod
The command above will start a gulp process that will concatenate all of your main scss files, minify and store them in the "dist/css" folder.

The SASS task runner is based off of Laravel Elixir. So more information on Laravel Elixir, please refer to its documentation at [https://laravel.com/docs/5.3/elixir](https://laravel.com/docs/5.3/elixir)

Each of the unique theme designs has its own scss file. Eg, "src/sass/sea-green.scss" etc. The "src/sass/_settings.scss" file is a SASS partial and it wont be compiled into its own file because of the preceding underscore in its file name.

The theme store core components part of all themes in the "src/sass/core" folder and store the re-usable theme components that can be changed and reused for other projects in the "src/sass/components" folder.



## How to make changes to the JS Files ##
We are requiring all of our external through the node package manager (npm) and you can find all of the packages we use and depend on as declared on the "package.json" file. The main javascript file we use this project is found at "src/js/app.js" and it requires the "src/js/bootrap.js" file which in turn pulls in jQuery and bootstrap-sass through npm. 

The javscript requirement engine we use for seperating our Javascript file is based off of Laravel Elixir [https://laravel.com/docs/5.3/elixir#working-with-scripts](https://laravel.com/docs/5.3/elixir#working-with-scripts) and its browerify module. For more information on browserify, please refer to its documentation at [http://browserify.org/](http://browserify.org/)

## Troubleshooting ##
**Windows users**
If you are on windows and your get and npm error when you run the npm install command, it might be that you dont have the windows build tools installed or configured for use with nodejs by running the following command in your terminal or command promt

    npm install --global windows-build-tools


In the case of errors or some other technical support, please feel free to comment in the comment section for this theme at wrapbootstrap or by directly contacting the theme other at [https://wrapbootstrap.com/user/laminbarrow](https://wrapbootstrap.com/user/laminbarrow).




