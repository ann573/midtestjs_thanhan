

const categories = [
    {
      id: 1,
      name: "Chuyên mục 1",
    },
    {
      id: 2,
      name: "Chuyên mục 2",
      children: [
        {
          id: 4,
          name: "Chuyên mục 2.1",
        },
        {
          id: 5,
          name: "Chuyên mục 2.2",
          children: [
            {
              id: 10,
              name: "Chuyên mục 2.2.1",
            },
            {
              id: 11,
              name: "Chuyên mục 2.2.2",
            },
            {
              id: 12,
              name: "Chuyên mục 2.2.3",
            },
          ],
        },
        {
          id: 6,
          name: "Chuyên mục 2.3",
        },
      ],
    },
    {
      id: 3,
      name: "Chuyên mục 3",
      children: [
        {
          id: 7,
          name: "Chuyên mục 3.1",
        },
        {
          id: 8,
          name: "Chuyên mục 3.2",
        },
        {
          id: 9,
          name: "Chuyên mục 3.3",
        },
      ],
    },
  ]

function createSelect(categories)
{
    let code = `<select>`
    for (let i in categories)
    {
        code += `<option value=${categories[i].id}>${categories[i].name}</option>`
        if (categories[i].children !== undefined)
        {
            let arr = categories[i].children
            for(let i in arr)
            {
                code += `<option value="${arr[i].id}">-- ${arr[i].name}</option>`
            }
            if (arr[i].children !== undefined)
            {
                let newArr = arr[i].children
                for(let i in arr)
                {
                    code += `<option value="${newArr[i].id}">---- ${newArr[i].name}</option>`
                }
            }
        }
    }
    code += `</select>`

    console.log(code)
    return code
}

document.write(createSelect(categories))




// !Code de quy dang loi   
// function createSelect(categories)
// {
//     let code = `<select>`
//     for (let i in categories)
//     {

//         code += `<option value=${categories[i].id}>${categories[i].name}</option>`
//         if (categories[i].children !== undefined)
//         {
//             code+= createOption(categories[i].children, 2)
//             // let arr = categories[i].children
//             // for(let i in arr)
//             // {
//             //     code += `<option value="${arr[i].id}">-- ${arr[i].name}</option>`
//             // }
//             // if (arr[i].children !== undefined)
//             // {
//             //     let newArr = arr[i].children
//             //     for(let i in arr)
//             //     {
//             //         code += `<option value="${newArr[i].id}">---- ${newArr[i].name}</option>`
//             //     }
//             // }
//         }
//     }
//     code += `</select>`

//     console.log(code)
//     return code
// }

// function createOption(arr, number)
// {
//     console.log("start")
//     let code = " "
//     for(let i in arr)
//     {
//         code += `<option value="${arr[i].id}"> ${arr[i].name.padStart(arr[i].name.length + number, '-')}</option>`
//         console.log(code)
//         if(arr[i].children !== undefined)
//         {
//             console.log("check: ", arr[i].children)
//             code += createOption(arr[i].children , number+=2);
//         }
//     }
//     return code
// }
// document.write(createSelect(categories))