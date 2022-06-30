const generatePostItem = ({ postId, postTitle, postPrice }) => {
    return `<div class="post-item">
    <div class="custom-control custom-checkbox custom-checkbox-toggle square">
        <input class="custom-control-input" id="post-${postId}" type="checkbox" name="paid-post" value="${postId}" data-post-price="${postPrice}">
        <label class="custom-control-label square" for="post-${postId}">
            <span class="label-text">${postTitle}</span>
        </label>
    </div>
    <div class="post-price"><span>${postPrice}</span>P</div>
</div>`;
};

module.exports = generatePostItem;
