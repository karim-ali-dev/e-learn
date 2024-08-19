import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// تحديد المسارات العامة التي يجب أن تكون متاحة للجميع
const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)']);

export default clerkMiddleware((auth, request) => {
  // إذا كان المسار عامًا، نسمح بالوصول إلى المسار
  if (isPublicRoute(request)) {
    return;
  }

  // حماية المسارات التي ليست عامة
  auth().protect();
});

export const config = {
  matcher: [
    // تشمل جميع المسارات التي تحتاج إلى حماية
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // تشمل مسارات API وtrpc
    '/(api|trpc)(.*)',
  ],
};
