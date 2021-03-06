const user = [
    {
        "id": "09bbf9df-9a1d-4af5-9068-738e254b9553",
        "title": "Steak",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "price": 5,
        "description": "streamline bleeding-edge e-business",
        "inStock": true
    },
    {
        "id": "a2828348-ff52-4fcb-9f46-45afd55728d9",
        "title": "Italian Pasta",
        "image": "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "price": 15,
        "description": "integrate end-to-end content",
        "inStock": false
    },
    {
        "id": "b38448c2-68bc-4346-ae94-1d454f211969",
        "title": "Vegetarian salade",
        "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "price": 4,
        "description": "engineer frictionless infrastructures",
        "inStock": true
    },
    {
        "id": "3623e16f-c3bd-47cb-af15-a313701ce314",
        "title": "Grilled steak",
        "image": "https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "price": 20,
        "description": "redefine B2C infrastructures",
        "inStock": true
    },
    {
        "id": "e10d707e-31ff-473c-90ff-92b65b74fca9",
        "title": "Sandwich",
        "image": "https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "price": 5,
        "description": "revolutionize dot-com bandwidth",
        "inStock": true
    },
    {
        "id": "797e7aca-1e6b-46ba-a2ec-41f8c7fbe1ce",
        "title": "Pancake with strawberry",
        "image": "https://images.unsplash.com/photo-1504113888839-1c8eb50233d3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "price": 6,
        "description": "seize next-generation communities",
        "inStock": false
    },
    {
        "id": "0ba50426-60b0-4ef9-84ac-ca104290dc8b",
        "title": "Ramen",
        "image": "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzN8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "price": 6,
        "description": "disintermediate bleeding-edge e-markets",
        "inStock": true
    },
    {
        "id": "03c6a82e-2c35-417f-993b-1192b33ee7b1",
        "title": "Pasta",
        "image": "https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzl8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "price": 11,
        "description": "cultivate compelling solutions",
        "inStock": false
    },
    {
        "id": "ac8253d1-356f-4f1f-9292-6bc7aee67116",
        "title": "Fruits",
        "image": "https://images.unsplash.com/photo-1467453678174-768ec283a940?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODJ8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "price": 14,
        "description": "leverage seamless e-business",
        "inStock": true
    },
    {
        "id": "22eebffd-b126-4d49-8d9b-259ce629e849",
        "title": "Meat with sauce",
        "image": "https://images.unsplash.com/photo-1574484284002-952d92456975?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTV8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "price": 18,
        "description": "redefine cross-platform models",
        "inStock": true
    },
    {
        "id": "0bb9a1e7-c71c-4404-9abb-8ced322f6640",
        "title": "Burger",
        "image": "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA0fHxmb29kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "price": 6,
        "description": "streamline clicks-and-mortar portals",
        "inStock": false
    },
    {
        "id": "4f816acb-9dc0-4f32-9b41-d52e97b920cb",
        "title": "Noodles with shrimps",
        "image": "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI0fHxmb29kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "price": 14,
        "description": "target B2B communities",
        "inStock": true
    },
    {
        "id": "b6ad27af-0082-448d-b2ec-2973c7e4d941",
        "title": "Vegetable soup",
        "image": "https://images.unsplash.com/photo-1560684352-8497838a2229?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMzfHxmb29kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "price": 5,
        "description": "iterate strategic e-markets",
        "inStock": true
    },
    {
        "id": "901236e6-5ae6-4946-b6f9-ef20f35c0fcc",
        "title": "Grilled Fish",
        "image": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU0fHxmb29kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "price": 15,
        "description": "unleash ubiquitous communities",
        "inStock": false
    },
    {
        "id": "e20b7fc3-9c3e-4543-af02-a807f15088fb",
        "title": "Casserole",
        "image": "https://images.unsplash.com/photo-1587900437942-8758241767ef?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTk5fHxmb29kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "price": 5,
        "description": "enhance cross-media partnerships",
        "inStock": false
    },
    {
        "id": "e8b68a18-bdf1-4db5-aa7e-49382fa34791",
        "title": "Big burger with fries",
        "image": "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjA1fHxmb29kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "price": 14,
        "description": "harness enterprise content",
        "inStock": true
    }
]

export default user