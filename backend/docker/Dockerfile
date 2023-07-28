FROM ubuntu:22.04
ARG PY_VERSION="3.11.4"
ARG APP_DIR="/home/appuser/app"

# postgreSQL version
ENV PG_VERSION=15

# プライベートリポジトリのアクセス用トークン
# 稚拙なコードで恥ずかしくて見せられないので隠蔽しておこう
# 参考: https://qiita.com/KEINOS/items/518610bc2fdf5999acf2
ARG gh_token

RUN apt-get update \
    && apt-get -y upgrade \
    && apt-get -y install \
    git \
    curl \
    build-essential \
    libffi-dev \
    libssl-dev \
    zlib1g-dev \
    liblzma-dev \
    libbz2-dev \
    libreadline-dev \
    libsqlite3-dev \
    lsb-release \
    ca-certificates \
    gnupg

# install PostgreSQL
RUN  curl https://www.postgresql.org/media/keys/ACCC4CF8.asc | gpg --dearmor | \
     tee /etc/apt/trusted.gpg.d/apt.postgresql.org.gpg >/dev/null && \
     sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list' && \
     apt-get update && \
     apt-get install -y postgresql-client-15 libpq-dev

RUN apt-get clean && \
    rm -rf /var/lib/apt/lists/*

RUN useradd --create-home appuser
USER appuser

# make local venv environment
ENV HOME /home/appuser
ENV PYENV_ROOT ${HOME}/.pyenv
ENV PATH ${PYENV_ROOT}/shims:${PYENV_ROOT}/bin:${PATH}

# install python
RUN cd ${HOME} && git clone https://github.com/pyenv/pyenv.git .pyenv \
  && pyenv install ${PY_VERSION} &&  pyenv rehash && pyenv global ${PY_VERSION}

# install python packages
ENV GIT_TOKEN=${gh_token}
RUN echo ${GIT_TOKEN}
RUN pip --no-cache-dir install -U pip
COPY ./requirements.txt requirements.txt
COPY ./requirements/ requirements/
RUN pip --no-cache-dir install -r requirements.txt

RUN mkdir -p ${APP_DIR}
WORKDIR ${APP_DIR}

# for debug
# USER root