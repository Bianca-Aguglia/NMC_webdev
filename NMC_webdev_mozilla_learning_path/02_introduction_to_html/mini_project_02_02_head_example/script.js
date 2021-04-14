const list = document.createElement('ul');
const html = document.querySelector('html');
const container = document.querySelector('.container')

container.appendChild(list);

html.onclick = function() {
  const listItem = document.createElement('li');
  const listContent = prompt('Enter your answer');
  listItem.textContent = listContent;
  list.appendChild(listItem);

  listItem.onclick = function(e) {
    e.stopPropagation();
    const listContent = prompt('Enter your updated answer');
    this.textContent = listContent;
  }
}