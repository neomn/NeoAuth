FROM neomn110/nuxt
RUN     rm -r          /myapp
COPY    ./src          /myapp
WORKDIR /myapp
CMD ["npm", "run", "dev", "--", "-o", "-p", "80"]
