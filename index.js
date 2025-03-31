function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
      // if present, the header is where you move the DIV from:
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      // otherwise, move the DIV from anywhere inside the DIV:
      elmnt.onmousedown = dragMouseDown;
    }
 
   function dragMouseDown(e) {
     e = e || window.event;
     e.preventDefault();
     // get the mouse cursor position at startup:
     pos3 = e.clientX;
     pos4 = e.clientY;
     document.onmouseup = closeDragElement;
     // call a function whenever the cursor moves:
     document.onmousemove = elementDrag;
   }
 
   function elementDrag(e) {
     e = e || window.event;
     e.preventDefault();
     // calculate the new cursor position:
     pos1 = pos3 - e.clientX;
     pos2 = pos4 - e.clientY;
     pos3 = e.clientX;
     pos4 = e.clientY;
     // set the element's new position:
     elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
     elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
   }
 
   function closeDragElement() {
     // stop moving when mouse button is released:
     document.onmouseup = null;
     document.onmousemove = null;
   }
 }

const page = {
    main: document.querySelector("main"),
    displaytext: function(text, element) {
        switch (element) {
            case "h1":
            this.main.appendChild(document.createElement("h1")).innerText = text;
            break;
            case "h2":
            this.main.appendChild(document.createElement("h2")).innerText = text;
            break;
            case "h3":
            this.main.appendChild(document.createElement("h3")).innerText = text;
            break;
            case "h4":
            this.main.appendChild(document.createElement("h4")).innerText = text;
            break;
            case "h5":
            this.main.appendChild(document.createElement("h5")).innerText = text;
            break;
            case "h6":
            this.main.appendChild(document.createElement("h6")).innerText = text;
            break;
            case "p":
            this.main.appendChild(document.createElement("p")).innerText = text;
            break;
            case "h1":
            this.main.appendChild(document.createElement("h1")).innerText = text;
            break;
            default:
            this.main.appendChild(document.createElement("p")).innerText = "Error: Element type is either invalid or not supported yet.";
            break;
        }
    },
    iframes: {
        iframeids: [],
        divids: [],
        addiframe: function(id, divid, src) {
            document.querySelector("main").appendChild(document.createElement("div")).id = divid;
            document.querySelector(`#${divid}`).appendChild(document.createElement("iframe")).id = id;
            this.iframeids.push(id);
            document.querySelector(id).src = src;
            this.dragElement(document.querySelector(divid));
            document.querySelector(`#${divid}`).setAttribute("class", "iframedivs");
            document.querySelector(`#${divid}`).style.height = document.querySelector(`#${id}`).height + 100 + "px";
            dragElement(document.getElementById("" + divid));
        }
    },
    

    enterinput: function(id, text) {
        this.main.appendChild(document.createElement("p")).innerText = text;
        this.main.appendChild(document.createElement("br"));
        this.main.appendChild(document.createElement("input")).id = id;
        document.querySelector(`#${id}`).addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
              console.log("Enter key pressed!");
              let inputValue = document.querySelector(`#${id}`).value;
              inputValue = inputValue.trimEnd();
              const Commands = "help clear";
              switch (Commands.indexOf(inputValue)) {
                case 0:
                    page.displaytext(Commands, "p")
                break;
                case 5:
                    page.main.innerHTML = "";
                    page.displaytext("Welcome!", "h3");
                    page.displaytext("Type 'help' for a list of commands.", "p");
                    commands.out.requireinput("Enter your command:", "command-input");
                break;
                default:
                    page.displaytext("Error: Command not found.", "p");
                    page.displaytext(Commands.indexOf(inputValue), "p");
                break;
               }
            }
          });
        
    },
}


        

const commands = {
    out: {    
        log: function (message, type) {
            page.displaytext(message, type);
        },
        requireinput: function (message, id) {
            page.enterinput(id, message);
        },

        
    }

}

commands.out.log("Welcome!", "h3");
commands.out.log("Type 'help' for a list of commands.", "p");
commands.out.requireinput("Enter your command:", "command-input");
page.iframes.addiframe("iframe", "ok", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAeFBMVEX///8AAACbm5tra2v29vaioqL7+/utra18fHxycnK0tLRaWlrv7+9vb2/t7e2NjY0SEhJhYWHW1tbKysqEhIQqKio0NDTCwsJERETf398+Pj5KSkohISGpqand3d3k5OS9vb1SUlIZGRmIiIjS0tKUlJQdHR01NTVMir6jAAAFSElEQVR4nO2d6XLiMBCEsQmYY8HchADBhJB9/zfc5UgWY8m3ptVeff9dNdNlS6M55FbL4XA4ijH3F8MPtBEMHDpH7wraEPuJ7kr95QVti+V0Jp7nxMrF3ovRRdtjMfNJXCu3ZumZes+gLbKWWUIq7xVtk634Sa28HtooS+krtPJ8tFV2klyuLryjzbKStlIrt76rOKm1mqLtspFArZU3QBtmIe8ardxXqGCn0coFDkmUQcOFDdoy+5jrtHLLe5Lns7N7sfSoTjlX+mjLLESnlcv7JenotHIxVhKdVkO0YRay1onl8slJthqtXLohyYtGqwBtmI1Eaq1CtF1Woj7puAhLidMqPweVVi7XoOZToZWrUWgYJLWao22ylsQh+u0X2iR7CZ+06qANsplFTKqRe63SeBRr5HJ96Zy/ldr6LnuVxWDysduO/EitVPf/yjwc5oF/6vUW/uC9iOObQbi9l8eW28X+s/Fv3cs6XMa3utM6j9Oz4FURqbYHB+MWwwjUearXTvqG99lTPnZ7x/xGbpYHTUvMlVWge78OKUrdtW5ceD9TfUYxhlHyqfFZV8OPMWlUGWM8zOOz14+9Iy9+psA/LD9RrtXO8/klhVF0W4Nm/ir/QxemzdgcZ8tsVx9Z9c7appA0mrB0aQvxtcOfo1e30JqBvMGmW3DlqQj1NIGuAGiMN7TH5RHXyvOOaJ/L0v2SF4u2YvYG0Io1CZ12FjQJYzC/z3bLCCFhclBZVjbPkrIrqeAZpyY4i/xyh5xHOFM1vyBazdBul0PyRPgDaUJeMQRuHtZkPCIcJX2v9JOCBiFdr1qtfBn3WqFtZB7La9VG+1waQIyFdrk88lqt0S6XRj5uIB5/WmR7VzOUh+cb4loRv1jyuRnaEAuR9EN7XIHMFqG62aM9roD2jgFTsB4KW4Dw/QvtcQVUU0pG4cwk31BMKZklQntcgQKNa/VAvGTJl1bRDlchfx+oE0s8cviNdrgKwloxHwzlxeLNkQL610ZojysgXop2YhWA+TMUF4t5gRcXi7g/GdA+g/a4Al0nVgHExWJtnrkgLhbzMFiu0dM6OaM9roDubkNjbNEeV0B+VICw7/0b8UwpcVeI9l8K5iAeydTe424O3lFyQD8p5xzYBfkQnjmI/y0vFm+3g3wvG/Gqpb333iALtNNlEW92uEDbKIkQa4d2uiyy917cYU3Fyx94LpAGW4AY/kKE9rsUiLD0AmcWEHP5Bala8omHO4zz5BuUWJTXjX3A1CLMbWGChysTuptocN/hXxZsOXmkWHTz0udsj4xCtS0CRsrjUPXWiDd4P0FVHoPFpXfQ/hcDqxXZLYniI5oxyBKn0CV+hfa+KEegWHSJQFAK8Ara9+KgslqUs62aH6sKwNhlirl8k3RABfVqkcUNdyAFRNYKImZDZB0wB9z9x7gV3kBcRs24Fd6QPyEy/0JZXCy0w1WQDh8oi9I/yE6nMI+1tqSn8XlX9xuSCWaqoo4SuWCL9gdFD4iJxVaKViHVvsy9E34j0ydCe855QiJ+WKKdrAuJ+IE9aviH+Yu8qer1GZi+Q/iEdrBWzOYfyI85CUz21SybEGHFMHg7xhjtW+2Y2xI3aNcMYEot4rvzUzBzt1YztWq1unnWrW3vFETz9SDs5cpXsFa+cnBM97y/jvs+XvfTH9jRjpLnIaXp+6ReqDcp4/xk7ZCFman7RdppCZa1+t+SO7rRk+Ik7zJYBVnH4PE+2ThBNkhRls5jo9u0ky+mHO9HDzeCj5p0cs5gE5ymx2E7DIp9SYdo74dhJ2hquOBwOBwODH8ANaBTm6RouNYAAAAASUVORK5CYII=");


