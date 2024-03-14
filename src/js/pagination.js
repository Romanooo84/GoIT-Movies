// const ulTag = document.querySelector('.paginator-ul');
// console.log(ulTag);

// function element(totalPages, page) {
//   let liTag = ``;
//   let activeLi;
//   let beforePages = page - 1;
//   let afterPages = page + 1;

//   if (page > 1) {
//     liTag += `<li class="btn prevPage">
//     <button class="page disable" id="prev">Prev</button>
//         </li>`;
//   }

//   for (let pageLength = beforePages; pageLength <= afterPages; pageLength++) {
//     if (page === pageLength) {
//       activeLi = 'active';
//     } else {
//       activeLi = ``;
//     }
//     liTag += `<li class="numb ${activeLi}"><span>${pageLength}</span></li>`;
//   }

//   if (page < totalPages) {
//     liTag += `<li class="btn nextPage">
//           <span><i class="fas fa-angle-right"></i>next</span>
//           </li>`;
//   }
//   ulTag.innerHTML = liTag;
// }

// element(movies.total_pages, pageNumber);

// .paginator ul {
//     display: flex;
//     gap: 15px;
//   }

//   .paginator ul li {
//     cursor: pointer;
//   }

//   .paginator ul li.btn {
//     background-color: rgba(247, 247, 247, 1);
//     // color: red;
//   }

//   .paginator ul li.active {
//     background-color: #ff6b08;
//   }
