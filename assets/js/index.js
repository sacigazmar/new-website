const minimapIndicator = document.querySelector( '#minimap > div' );

document.addEventListener( 'scroll', ( ) => {
  const percX = window.pageXOffset / ( window.innerWidth * 5 );
  const percY = window.pageYOffset / ( window.innerHeight * 5 );

  minimapIndicator.style.left = ( 100 * percX ) + '%';
  minimapIndicator.style.top = ( 100 * percY ) + '%';
} );
