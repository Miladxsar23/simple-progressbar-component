# simple-progressbar-component
Ever since I studied Bootstrap, I thought, why not start building each of the components in a personalized way ??? So I decided to create a repository to make most of the components personalized.

# Prerequisties
* instal npm
* install node-sass package

# installation
 first download or clone this project and open it in your code editor and open the terminal and run this line:
 ```shell
npm install
```
Now just enter the following command in the terminal:
 ```shell
npm start
```
## Usage
Just add the style and JavaScript file to the HTML.
Then create an instance of the class and use its interfaces:
 ```shell
let pb = new Progress(currentValue<Number>, minValue<Number>, maxValue<Number>, options<Object>);
```

## --Options object
In this object you can specify a property to specify the class of element to which you want to add the component.
The default value is the body.
 ```shell
let pb = new Progress(15, 0, 100, { parent : ".progress" });
```

## --Methods
Method | Argument | Description 
--- | --- | --- | 
startTo | stepValue(number), time(ms) | By calling this method, progressing begins | 
--- | --- | --- | 
end | ... | By calling this method, progressing end | 
  
## Live preview
  click [myCodepen](https://codepen.io/mxworld/pen/jOLxqBW) link.

## Contributing
As I use this for my own projects, I know this might not be the perfect approach
for all the projects out there. If you have any ideas, just
[open an issue](https://github.com/Miladxsar23/simple-progressbar-component/issues/new) and tell me what you think.

If you'd like to contribute, please fork the repository and make changes as
you'd like. Pull requests are warmly welcome.

## Licensing
This project is licensed under MIT license.

## Contact
* email: milad.xsar72@gmail.com
