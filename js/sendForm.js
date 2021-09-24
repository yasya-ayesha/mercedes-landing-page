const form = document.querySelector('.form-test-drive');

form.addEventListener('submit', (event) => { // submitting form
    event.preventDefault(); // no page reload, used AJAX method
    let data = {}; // obj, where data will be added
    for(let { name, value } of form.elements) { // gathering data from inputs
        if (value && !/^\s+$/.test(value)) { // test if data from input exists and it isn't spaces only
            if (name) { // takes inputs only (not btn)
                data[name] = value; // adding data from input to obj
            }
        }
    };

    if (Object.keys(data).length === 3) { // test if data obj is not empty
        fetch('https://jsonplaceholder.typicode.com/posts', { // sending data to server 
            method: 'POST', // type of request
            body: JSON.stringify(data) // data to send
        })
            .then(response => { // when get a response from server
                if (response.status === 200 || response.status === 201) { // types of successful response codes
                    return response.json(); // what we've got from server
                } else { // if not successful response code
                    throw new Error (response.status); // create error with type
                }
            })
            .then(data => { // next step
                alert('Your data is saved successfully!'); // informing user about success
                form.reset(); // clear form from typed data
            })
            .catch(error => { // in case of error
                alert('Oops! Something went wrong... Status ' + error.message) // informing user about error code
            })
    } else { // if test failed
        alert(`Sorry, we can't process your data, because it is incomplete or invalid. Please, correct it and try again.`); // informing user about wrong data
    }
})

// https://jsonplaceholder.typicode.com