FROM ruby:2.2.0
MAINTAINER codeworm96 <codeworm96@outlook.com>

RUN mkdir -p /app/report

WORKDIR /app

COPY ./little_linguist_serve /app/

COPY ./Gemfile /app/

COPY ./report /app/report

RUN bundle install

EXPOSE 4567

CMD ["bundle", "exec", "./little_linguist_serve", "-o", "0.0.0.0"]

