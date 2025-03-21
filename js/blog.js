const posts = {
    1: {
        title: "WHAT'S MICRO FRONT-END?",
        image: "img/posts/POST-08.png",
        description: `
            <h2>What is Micro Front-End?</h2>
            <p>The concept of <strong>Micro Front-End</strong> is a way of breaking up a monolithic front-end application into smaller, more manageable pieces. Each piece, or micro front-end, can be developed, tested, and deployed independently. This approach enables better scalability, maintainability, and collaboration among different teams working on the same project.</p>

            <h3>Why Micro Front-End?</h3>
            <p>The traditional approach of having a single large front-end application can become complex and hard to scale. With micro front-ends, each team can work on a specific part of the UI without interfering with others, leading to more flexibility and faster development cycles.</p>

            <h3>Key Benefits</h3>
            <ul>
                <li><strong>Independent Deployments:</strong> Each micro front-end can be deployed separately, reducing the risk of breaking the entire application.</li>
                <li><strong>Scalability:</strong> Teams can scale the development of different parts of the application independently, improving performance and reducing bottlenecks.</li>
                <li><strong>Technology Agnostic:</strong> Different micro front-ends can be built using different technologies, allowing teams to choose the best tools for the job.</li>
            </ul>

            <h3>How Does It Work?</h3>
            <p>Micro front-ends can be integrated in various ways, such as using Web Components, iFrames, or even through server-side integration. The key is to ensure that each micro front-end is isolated and communicates with the rest of the application in a well-defined manner.</p>

            <h3>Conclusion</h3>
            <p>Micro front-end architecture provides a flexible and scalable way to manage complex front-end applications. By breaking down the UI into smaller, independent pieces, teams can work more efficiently, deploy updates faster, and improve the overall quality of the product.</p>
        `,
        authorDate: "20.03.2024",
        author: "GABRIEL FILIPY"
    },
    2: {
        title: "Exploring the Dimensions of Game Development",
        image: "img/posts/POST-10.png",
        description: "",
        authorDate: "21.03.2024",
        author: "GABRIEL FILIPY"
    },
    3: {
        title: "SAGA PATTERN",
        image: "img/posts/POST-04.png",
        description: "",
        authorDate: "01.01.2024",
        author: "GABRIEL FILIPY"
    },
    4: {
        title: "CI/CD",
        image: "img/posts/POST-05.png",
        description: "",
        authorDate: "04.01.2024",
        author: "GABRIEL FILIPY"
    },
    5: {
        title: "PIPELINE",
        image: "img/posts/POST-06.png",
        description: "",
        authorDate: "11.02.2024",
        author: "GABRIEL FILIPY"
    },
    6: {
        title: "DOCKER",
        image: "img/posts/POST-07.png",
        description: "",
        authorDate: "20.02.2024",
        author: "GABRIEL FILIPY"
    }
};

function post(postId) {
    const postDetails = posts[postId];
    
    if(postDetails) {
        const url = `post-portal.html?title=${encodeURIComponent(postDetails.title)}&image=${encodeURIComponent(postDetails.image)}&description=${encodeURIComponent(postDetails.description)}&author=${encodeURIComponent(postDetails.author)}&authorDate=${encodeURIComponent(postDetails.authorDate)}`;
        window.location.href = url;
    } else {
        alert("Post não encontrado.");
    }
}
