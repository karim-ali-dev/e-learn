import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isPublicRoute = createRouteMatcher([
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/api/webhook',
  '/api/uploadthing(.*)', // تأكد من أن المسارات العامة محددة بشكل صحيح
]);

export default clerkMiddleware((auth, request) => {
  const url = request.nextUrl.pathname;
  console.log('Request path:', url); // تسجيل المسار

  if (!isPublicRoute(request)) {
    console.log('Protecting route:', url); // سجل المسار المحمي
    auth().protect();
  } else {
    console.log('Public route:', url); // سجل المسار العام
  }
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/api/(.*)', // تأكد من تضمين جميع مسارات API هنا
  ],
};
